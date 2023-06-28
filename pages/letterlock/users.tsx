import { useEffect, useState } from 'react';
import Spinner from "@/components/Utility/Spinner";
import UsersTableHead from "@/components/Letterlock/Users/UsersTableHead";
import UsersTableRow from "@/components/Letterlock/Users/UsersTableRow";

export default function Users() {
  const [ users, setUsers ] = useState([] as (Array<object>));
  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      return await fetch('/api/letterlock-users-read')
        .then(response => response.json())
        .then(res => setUsers(res.users))
    }
    getUsers()
  }, []);

  return (
    <div className="grow flex flex-col px-10 py-10 overflow-hidden">
      <h1 className="text-5xl pb-10 font-semibold text-ll-orange">Users</h1>

      <div className="flex flex-col grow border border-ll-orange rounded overflow-scroll">
        <UsersTableHead />
        { users.length ? (users?.map((user, index) => (
          <UsersTableRow
            key={ user.id }
            index={ index + 1 }
            id={ user.id }
            levelsCompleted={ user.levels_completed_count }
            adsWatchedCount={ user.ads_watched_lives + user.ads_watched_moves }
            zeroLivesCount={ user.zero_lives_tally }
            stockwiseVersion={ user.stockwise_version }
            deviceModel={ user.device_model }
            deviceOS={ user.device_os }
            updatedAt={ user.updated_at }
            createdAt={ user.created_at } />
        ))) : (<Spinner />)}
      </div>
    </div>
  )
}
