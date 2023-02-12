import { LogsTableRowProp } from "@/interfaces/logs";

export default function LogsTableRow(log: LogsTableRowProp) {
  return (
    <div className={ 'flex justify-between items-center px-2 cursor-pointer' + (log.index % 2 !== 0 ? ' bg-slate-900' : '')}>
      <p className="h-6 w-32 flex items-center px-2 text-sm text-gray-300 border-r border-gray-500">{ log.time }</p>
      <p className="h-6 w-16 flex justify-start items-center px-2 text-sm text-gray-300 border-r border-gray-500">{ log.code }</p>
      <p className="h-6 w-40 truncate flex items-center px-2 text-xs text-gray-300 border-r border-gray-500">{ log.email }</p>
      <p className="h-6 grow truncate flex justify-start items-center px-2 text-xs text-gray-300 border-r border-gray-500">{ log.message }</p>
      <p className="h-6 w-44 truncate flex justify-end items-center px-2 text-xs text-gray-300 border-r border-gray-500">{ log.source }</p>
      <p className="h-6 w-16 flex justify-end items-center px-2 text-sm text-gray-300 border-r border-gray-500">{ log.tag }</p>
      <p className="h-6 w-20 flex justify-end items-center px-2 text-sm text-gray-300 uppercase">{ log.platform }</p>
    </div>
  )
}