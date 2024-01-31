export default function UsersTableHead() {
  return (
    <div className="flex items-center py-1 px-2 border-b border-gray-300 text-sm text-slate-600 font-semibold sticky top-0 bg-ll-orange" style={{ fontFamily: 'Poppins-Regular' }}>
      <p className="w-12 px-2 text-center">#</p>
      <p className="w-40 px-2 text-center">Username</p>
      <p className="w-32 grow px-2 text-center">Device Model</p>
      <p className="w-32 px-2 text-center">Current Level</p>
      <p className="w-32 px-2 text-center">Ads Watched</p>
      <p className="w-28 px-2 text-center">No Life Count</p>
      <p className="w-40 px-2 text-center">Letter Lock Version</p>
      <p className="w-28 px-2 text-center">Device OS</p>
      <p className="w-28 px-2 text-center">Updated At</p>
      <p className="w-28 px-2 text-center">Created At</p>
    </div>
  )
}
