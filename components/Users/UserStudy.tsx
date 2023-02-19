export default function UserStudy(props) {
  const { index, name, symbol, type, notes, completed_qs, updated_date, completed } = props

  return (
    <div className={ 'w-2/3 flex justify-between items-center py-1 px-3 rounded' + (index % 2 !== 0 ? ' bg-slate-100/70' : '') }>
      <div>
        <div className="flex text-sm text-amber-600">
          <p className="">{ symbol }</p>
          <p className="mx-2 min-w-min whitespace-nowrap">|&nbsp;&nbsp;{ name }</p>
        </div>

        <p className="inline mt-1 mr-2 text-xs text-slate-600">{ type === 0 ? 'STANDARD' : 'ADVANCED' }</p>
        <p className="inline-block mt-1 text-xs text-slate-400">|&nbsp;&nbsp;Edited: { new Date (updated_date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }</p>
      </div>

      <div class="w-16 text-sm ml-8 font-normal">
        <div class="relative w-12 h-12 float-right rounded-full border-2 border-emerald-400">
          <p class="absolute left-2.5 top-1">{ completed_qs + (completed ? 0 : 1) }</p>
          <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-0.5 -rotate-45 bg-emerald-400"></div>
          <p class="absolute right-2.5 bottom-1">{ type === 0 ? '6' : '9' }</p>
        </div>
      </div>
    </div>
  )
}