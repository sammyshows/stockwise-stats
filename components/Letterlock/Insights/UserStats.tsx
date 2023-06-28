export default function UserStats(props) {

  const { 
    usersActive1Day,
    usersActive7Days,
    usersActive28Days,
    usersNew1Day,
    usersNew7Days,
    usersNew28Days
  } = props

  return (
    <div className="flex flex-col gap-y-6 p-3 rounded-xl bg-blue-500">
      <div className="h-36 w-80 flex flex-col justify-between p-3 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
        <div className="flex justify-between items-center pb-2">
          <img src="/icons/users-black.svg" alt="Users" className="h-8 w-8" />
          <p className="text-xl text-regular">Active Users</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-slate-500 text-sm font-bold">today</p>
            <p className="text-4xl text-medium">{ usersActive1Day }</p>
          </div>
          <div>
            <p className="text-slate-500 text-sm font-bold">this week</p>
            <p className="text-4xl text-medium">{ usersActive7Days }</p>
          </div>
          <div>
            <p className="text-slate-500 text-sm font-bold">this month</p>
            <p className="text-4xl text-medium">{ usersActive28Days }</p>
          </div>
        </div>
      </div>

      <div className="h-36 w-80 flex flex-col justify-between p-3 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
        <div className="flex justify-between items-center pb-2">
          <img src="/icons/users-black.svg" alt="Users" className="h-8 w-8" />
          <p className="text-xl text-regular">New Users</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-slate-500 text-sm font-bold">today</p>
            <p className="text-4xl text-medium">{ usersNew1Day }</p>
          </div>
          <div>
            <p className="text-slate-500 text-sm font-bold">this week</p>
            <p className="text-4xl text-medium">{ usersNew7Days }</p>
          </div>
          <div>
            <p className="text-slate-500 text-sm font-bold">this month</p>
            <p className="text-4xl text-medium">{ usersNew28Days }</p>
          </div>
        </div>
      </div>        
    </div>
  )
}