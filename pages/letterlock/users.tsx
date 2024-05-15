import { useEffect, useState } from 'react';
import Spinner from "@/components/Utility/Spinner";
import UsersTableHead from "@/components/Letterlock/Users/UsersTableHead";
import UsersTableRow from "@/components/Letterlock/Users/UsersTableRow";

export default function Users() {
  const [hideInstallOnlyUsers, setHideInstallOnlyUsers] = useState(false);
  const [users, setUsers] = useState([] as (Array<any>));
  const [sortField, setSortField] = useState(localStorage.getItem('sortField') || 'username');
  const [sortDirection, setSortDirection] = useState(localStorage.getItem('sortDirection') || 'asc');

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      const response = await fetch('/api/letterlock-users-read', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
      setUsers(res.users);
    };
    getUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem('sortField', sortField);
    localStorage.setItem('sortDirection', sortDirection);
  }, [sortField, sortDirection]);

  const handleSort = (field: string) => {
    const isAsc = sortField === field && sortDirection === 'asc';
    setSortDirection(isAsc ? 'desc' : 'asc');
    setSortField(field);
  };

  const filteredUsers = hideInstallOnlyUsers
    ? users.filter(user => user.levels_completed_count > 1)
    : users;

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let aValue;
    let bValue;

    // Handle computed field for adsWatchedCount, since it's a sum of two fields
    if (sortField === 'ads_watched_count') {
      aValue = a.ads_watched_lives + a.ads_watched_moves;
      bValue = b.ads_watched_lives + b.ads_watched_moves;
    } else {
      aValue = a[sortField];
      bValue = b[sortField];
    }

    // Handle date fields
    if (sortField === 'updated_at' || sortField === 'created_at') {
      aValue = new Date(aValue.split('/').reverse().join('-')).getTime();
      bValue = new Date(bValue.split('/').reverse().join('-')).getTime();
    }
    // Handle numeric fields stored as strings
    else if (!isNaN(aValue) && !isNaN(bValue)) {
      aValue = parseFloat(aValue);
      bValue = parseFloat(bValue);
    }
    // Handle case-insensitive string comparison
    else if (typeof aValue === 'string' && typeof bValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="grow flex flex-col px-10 py-10 overflow-hidden">
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-5xl font-semibold text-ll-orange">Users</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setHideInstallOnlyUsers(!hideInstallOnlyUsers)}>
          {hideInstallOnlyUsers ? "Show All Users" : "Hide Install Only Users"}
        </button>
      </div>

      <div className="flex flex-col grow border border-ll-orange rounded overflow-scroll">
        <UsersTableHead sortField={sortField} sortDirection={sortDirection} onSort={handleSort} />
        {sortedUsers.length ? (
          sortedUsers.map((user, index) => (
            <UsersTableRow
              key={user.id}
              index={index + 1}
              id={user.id}
              username={user.username}
              deviceModel={user.device_model}
              levelsCompleted={user.levels_completed_count}
              adsWatchedCount={user.ads_watched_lives + user.ads_watched_moves}
              zeroLivesCount={user.zero_lives_tally}
              letterlockVersion={user.letterlock_version}
              deviceOS={user.device_os}
              updatedAt={user.updated_at}
              createdAt={user.created_at}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
