export default function LogsTableHead() {
  return (
    <div className="flex items-center py-1 px-2 border-b border-gray-300 font-semibold sticky top-0 bg-black" style={{ fontFamily: 'Poppins-Medium' }}>
      <p className="w-32 px-2 text-sm text-left text-slate-200">Date / Time</p>
      <p className="w-16 px-2 text-sm text-left text-slate-200">Code</p>
      <p className="w-40 px-2 text-sm text-left text-slate-200">Email</p>
      <p className="w-40 grow px-2 text-sm text-left text-slate-200">Message</p>
      <p className="w-44 px-2 text-sm text-right text-slate-200">Source</p>
      <p className="w-16 px-2 text-sm text-right text-slate-200">Tag</p>
      <p className="w-20 px-2 text-sm text-right text-slate-200">Platform</p>
    </div>
  )
}