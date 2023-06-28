import { useEffect, useState } from 'react';
import Spinner from "@/components/Utility/Spinner";
import LogsTableHead from "@/components/Stockwise/Logs/LogsTableHead";
import LogsTableRow from "@/components/Stockwise/Logs/LogsTableRow";

export default function Logs() {
  const [ logs, setLogs ] = useState([] as (Array<object>));
  useEffect(() => {
    const getLogs = async (): Promise<void> => {
      return await fetch('/api/logs-read')
        .then(response => response.json())
        .then(res => setLogs(res.logs))
    }
    getLogs()
  }, []);

  return (
    <div className="grow flex flex-col px-10 py-10 overflow-hidden">
      <h1 className="text-5xl pb-10 font-semibold text-emerald-400">Logs</h1>

      <div className="flex flex-col grow border border-emerald-800 rounded overflow-scroll">
        <LogsTableHead showEmail={ true } />
        { logs.length ? (logs?.map((log, index) => (
          <LogsTableRow
            key={ index }
            index={ index }
            showEmail={ true }
            id={ log.id }
            userId={ log.user_id }
            email={ log.email }
            code={ log.code }
            tag={ log.tag }
            source={ log.source }
            message={ log.message }
            platform={ log.platform }
            time={ index !== logs.length -1 && logs[index + 1].time === log.time ? '' : log.time } />
        ))) : (<Spinner />)}
      </div>
    </div>
  )
}
