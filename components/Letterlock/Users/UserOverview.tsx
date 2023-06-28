import { inWords } from "@/helpers/math"

export default function UserOverview(props) {
  const { user, portfolios, inProgressStudies, completedStudies, lastLogTime } = props
  let lastOnline = '-'
  if (lastLogTime)
    lastOnline = new Date(`${lastLogTime.slice(3,5)}/${lastLogTime.slice(0,2)}/${lastLogTime.slice(6,8)}`).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="h-full grid grid-cols-2 p-3 divide-x-2 divide-slate-300">
      <div className="w-full flex flex-col items-center gap-y-4">
        <h2 className="text-lg text-emerald-500">USER INFO</h2>
        <div className="w-2/3 grid grid-cols-5">
          <div className="col-span-2 flex flex-col gap-y-4 text-slate-600">
            <p>Last online</p>
            <p>Stockwise version</p>
            <p>Authentication</p>
            <p>Device model</p>
            <p>Device OS</p>
          </div>
          <div className="col-span-3 flex flex-col gap-y-4 text-right text-amber-600">
            <p>{ lastOnline }</p>
            <p>{ user.stockwise_version || '-' }</p>
            <p>{ user.account_type === 0 ? 'Stockwise' : 'Google / Apple' }</p>
            <p>{ user.device_model || '-' }</p>
            <p>{ user.device_os || '-' }</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-y-4 text-slate-600">
        <h2 className="text-lg text-emerald-500">QUICK NUMBERS</h2>
        <p><span className="text-amber-600 uppercase">{ inWords(Object.keys(portfolios).length) || 'NO' }</span> { Object.keys(portfolios).length === 1 ? 'portolio' : 'portfolios' }</p>
        <p><span className="text-amber-600 uppercase">{ inWords(inProgressStudies.length) || 'NO' }</span> { inProgressStudies.length === 1 ? 'study' : 'studies' } in progress</p>
        <p><span className="text-amber-600 uppercase">{ inWords(completedStudies.length) || 'NO' }</span> { completedStudies.length === 1 ? 'study' : 'studies' } completed</p>
      </div>
    </div>
  )
}