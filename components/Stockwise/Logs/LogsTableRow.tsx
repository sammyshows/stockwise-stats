import { useRouter } from 'next/router'
import { LogsTableRowProp } from "@/interfaces/logs";

export default function LogsTableRow(log: LogsTableRowProp) {
  const router = useRouter()
  
  return (
    <div onClick={ () => log.userId &&  router.push(`/stockwise/users/${log.userId}`) } className={ 'flex justify-between items-center px-2 cursor-pointer text-gray-600 hover:bg-emerald-100 duration-100' + (log.index % 2 !== 0 ? ' bg-slate-200/70' : '')}>
      <p className="h-6 w-32 flex items-center px-2 text-sm border-r border-gray-500">{ log.time }</p>
      <p className="h-6 w-16 flex justify-start items-center px-2 text-sm border-r border-gray-500">{ log.code }</p>
      { log.showEmail && <p className="h-6 w-40 truncate flex items-center px-2 text-xs border-r border-gray-500">{ log.email }</p> }
      <p className="h-6 grow truncate flex justify-start items-center px-2 text-xs border-r border-gray-500">{ log.message }</p>
      <p className="h-6 w-44 truncate flex justify-end items-center px-2 text-xs border-r border-gray-500">{ log.source }</p>
      <p className="h-6 w-16 flex justify-end items-center px-2 text-sm border-r border-gray-500">{ log.tag }</p>
      <p className="h-6 w-20 flex justify-end items-center px-2 text-sm uppercase">{ log.platform }</p>
    </div>
  )
}