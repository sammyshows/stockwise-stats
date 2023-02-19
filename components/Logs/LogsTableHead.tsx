export default function LogsTableHead(props) {
  return (
    <div className="flex items-center py-1 px-2 border-b border-gray-300 text-sm text-slate-600 sticky top-0 bg-emerald-200" style={{ fontFamily: 'Poppins-Regular' }}>
      <p className="w-32 px-2 text-left">Date / Time</p>
      <p className="w-16 px-2 text-left">Code</p>
      { props.showEmail && <p className="w-40 px-2 text-left">Email</p> }
      <p className="w-40 grow px-2 text-left">Message</p>
      <p className="w-44 px-2 text-right">Source</p>
      <p className="w-16 px-2 text-right">Tag</p>
      <p className="w-20 px-2 text-right">Platform</p>
    </div>
  )
}