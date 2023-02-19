import { useEffect, useState } from 'react';
import Spinner from "@/components/Utility/Spinner";
import UsersTableHead from "@/components/Users/UsersTableHead";
import UsersTableRow from "@/components/Users/UsersTableRow";

export default function Users() {
  const [ users, setUsers ] = useState([] as (Array<object>));
  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      return await fetch('/api/users-read')
        .then(response => response.json())
        .then(res => setUsers(res.users))
    }
    getUsers()
  }, []);

  return (
    <div className="grow flex flex-col px-10 py-10 overflow-hidden">
      <h1 className="text-5xl pb-10 font-semibold text-emerald-400">Users</h1>

      <div className="flex flex-col grow border border-emerald-800 rounded overflow-scroll">
        <UsersTableHead />
        { users.length ? (users?.map((user, index) => (
          <UsersTableRow
            key={ index }
            index={ index + 1 }
            id={ user.id }
            email={ user.email }
            accountType={ user.account_type }
            stockwiseVersion={ user.stockwise_version }
            deviceModel={ user.device_model }
            deviceOS={ user.device_os }
            dateJoined={ user.date_joined } />
        ))) : (<Spinner />)}
      </div>
    </div>
  )
}
