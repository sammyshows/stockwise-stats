import { UsersTableRowProp } from "@/interfaces/users";

export default function UsersTableRow(user: UsersTableRowProp) {
  return (
    <div className={ 'flex justify-between items-center px-2 cursor-pointer' + (user.index % 2 !== 0 ? ' bg-slate-900' : '')}>
      <p className="h-6 w-12 flex items-center px-2 text-sm text-left text-gray-300 border-r border-gray-500">{ user.index }</p>
      <p className="h-6 grow flex items-center px-2 text-sm text-left text-gray-300 border-r border-gray-500">{ user.email }</p>
      <p className="h-6 w-40 flex justify-end items-center px-2 text-sm text-gray-300 border-r border-gray-500">{ user.deviceModel }</p>
      <p className="h-6 w-40 flex justify-end items-center px-2 text-sm text-gray-300 border-r border-gray-500">{ user.accountType === 0 ? 'Stockwise' : 'Google / Apple' }</p>
      <p className="h-6 w-40 flex justify-end items-center px-2 text-sm text-gray-300 border-r border-gray-500">{ user.stockwiseVersion }</p>
      <p className="h-6 w-28 flex justify-end items-center px-2 text-sm text-gray-300 border-r border-gray-500">{ user.deviceOS }</p>
      <p className="h-6 w-28 flex justify-end items-center px-2 text-sm text-gray-300">{ user.dateJoined }</p>
    </div>
  )
}