export default function UsersTableHead() {
  return (
    <div className="flex items-center py-1 px-2 border-b border-gray-300 font-semibold sticky top-0 bg-black" style={{ fontFamily: 'Poppins-Medium' }}>
      <p className="w-12 px-2 text-sm text-left text-slate-200">#</p>
      <p className="grow px-2 text-sm text-left text-slate-200">Email</p>
      <p className="w-40 px-2 text-sm text-right text-slate-200">Device Model</p>
      <p className="w-40 px-2 text-sm text-right text-slate-200">Account Type</p>
      <p className="w-40 px-2 text-sm text-right text-slate-200">Stockwise Version</p>
      <p className="w-28 px-2 text-sm text-right text-slate-200">Device OS</p>
      <p className="w-28 px-2 text-sm text-right text-slate-200">Date Joined</p>
    </div>
  )
}