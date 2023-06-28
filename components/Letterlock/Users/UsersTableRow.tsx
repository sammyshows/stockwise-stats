import Link from 'next/link'
import { UsersTableRowProp } from "@/interfaces/letterlock/users";

export default function UsersTableRow(user: UsersTableRowProp) {
  return (
    <Link href={`/letterlock/users/${user.id}`} className={ 'flex justify-between items-center px-2 cursor-pointer text-gray-600 hover:bg-emerald-100 duration-100' + (user.index % 2 !== 0 ? ' bg-slate-200/70' : '')}>
      <p className="h-6 w-12 flex justify-center items-center px-2 text-sm border-r border-gray-500">{ user.index }</p>
      <p className="h-6 w-40 flex justify-center items-center px-2 text-sm border-r border-gray-500">{ user.levelsCompleted }</p>
      <p className="h-6 w-32 flex justify-center items-center px-2 text-sm border-r border-gray-500">{ user.adsWatchedCount }</p>
      <p className="h-6 w-40 flex justify-center items-center px-2 text-sm border-r border-gray-500">{ user.zeroLivesCount }</p>
      <p className="h-6 w-40 grow flex justify-center items-center px-2 text-sm border-r border-gray-500">{ user.stockwiseVersion || '-' }</p>
      <p className="h-6 w-32 flex justify-center items-center px-2 text-sm border-r border-gray-500">{ user.deviceModel || '-' }</p>
      <p className="h-6 w-28 flex justify-center items-center px-2 text-sm border-r border-gray-500">{ user.deviceOS || '-' }</p>
      <p className="h-6 w-28 flex justify-center items-center px-2 text-sm border-r border-gray-500">{ user.updatedAt }</p>
      <p className="h-6 w-28 flex justify-center items-center px-2 text-sm">{ user.createdAt }</p>
    </Link>
  )
}
