import { UsersTableRowProp } from "@/interfaces/users";

export default function UsersTableRow(user: UsersTableRowProp) {
  return (
    <div className={ 'flex justify-between items-center py-1 px-2 cursor-pointer' + (user.index % 2 !== 0 ? ' bg-slate-900' : '')}>
      <p className="grow px-2 text-sm text-left text-slate-300">{ user.email }</p>
      <p className="w-40 px-2 text-sm text-right text-slate-300">{ user.deviceModel }</p>
      <p className="w-32 px-2 text-sm text-right text-slate-300">{ user.accountType }</p>
      <p className="w-40 px-2 text-sm text-right text-slate-300">{ user.stockwiseVersion }</p>
      <p className="w-28 px-2 text-sm text-right text-slate-300">{ user.osVersion }</p>
      <p className="w-28 px-2 text-sm text-right text-slate-300">{ user.dateJoined }</p>
    </div>
  )
}