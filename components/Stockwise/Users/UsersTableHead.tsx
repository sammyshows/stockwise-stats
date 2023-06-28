export default function UsersTableHead() {
  return (
    <div className="flex items-center py-1 px-2 border-b border-gray-300 text-sm text-slate-600 font-semibold sticky top-0 bg-emerald-200" style={{ fontFamily: 'Poppins-Regular' }}>
      <p className="w-12 px-2 text-left">#</p>
      <p className="grow px-2 text-left">Email</p>
      <p className="w-40 px-2 text-right">Device Model</p>
      <p className="w-40 px-2 text-right">Account Type</p>
      <p className="w-40 px-2 text-right">Stockwise Version</p>
      <p className="w-28 px-2 text-right">Device OS</p>
      <p className="w-28 px-2 text-right">Date Joined</p>
    </div>
  )
}