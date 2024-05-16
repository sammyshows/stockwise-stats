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
    <div className="w-1/3 flex flex-col">
      <div className="p-3 rounded-tl-xl bg-blue-500">
        <div className="h-36 w-full flex flex-col justify-between py-3 px-6 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
          <div className="flex justify-between items-center pb-2">
            <img src="/icons/users-black.svg" alt="Users" className="h-8 w-8" />
            <p className="text-xl text-regular">Active Users</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500 text-sm font-bold">past 24hr</p>
              <p className="text-4xl text-medium">{ usersActive1Day }</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-bold">past week</p>
              <p className="text-4xl text-medium">{ usersActive7Days }</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-bold">past month</p>
              <p className="text-4xl text-medium">{ usersActive28Days }</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent to-indigo-600">
        <div className="p-3 rounded-bl-xl rounded-br-xl bg-blue-500">
          <div className="h-36 w-full flex flex-col justify-between py-3 px-6 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
            <div className="flex justify-between items-center pb-2">
              <img src="/icons/users-black.svg" alt="Users" className="h-8 w-8" />
              <p className="text-xl text-regular">New Users</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-slate-500 text-sm font-bold">past 24hr</p>
                <p className="text-4xl text-medium">{ usersNew1Day }</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-bold">past week</p>
                <p className="text-4xl text-medium">{ usersNew7Days }</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-bold">past month</p>
                <p className="text-4xl text-medium">{ usersNew28Days }</p>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </div>
  )
}