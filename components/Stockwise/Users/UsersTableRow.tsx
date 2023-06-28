import Link from 'next/link'
import { UsersTableRowProp } from "@/interfaces/stockwise/users";

export default function UsersTableRow(user: UsersTableRowProp) {
  return (
    <Link href={`/stockwise/users/${user.id}`} className={ 'flex justify-between items-center px-2 cursor-pointer text-gray-600 hover:bg-emerald-100 duration-100' + (user.index % 2 !== 0 ? ' bg-slate-200/70' : '')}>
      <p className="h-6 w-12 flex items-center px-2 text-sm text-left border-r border-gray-500">{ user.index }</p>
      <p className="h-6 grow flex items-center px-2 text-sm text-left border-r border-gray-500">{ user.email }</p>
      <p className="h-6 w-48 truncate flex justify-end items-center px-2 text-sm border-r border-gray-500">{ user.deviceModel }</p>
      <p className="h-6 w-40 flex justify-end items-center px-2 text-sm border-r border-gray-500">{ user.accountType === 0 ? 'Stockwise' : 'Google / Apple' }</p>
      <p className="h-6 w-40 flex justify-end items-center px-2 text-sm border-r border-gray-500">{ user.stockwiseVersion }</p>
      <p className="h-6 w-28 flex justify-end items-center px-2 text-sm border-r border-gray-500">{ user.deviceOS }</p>
      <p className="h-6 w-28 flex justify-end items-center px-2 text-sm">{ user.dateJoined }</p>
    </Link>
  )
}