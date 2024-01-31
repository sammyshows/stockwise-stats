export default function LevelsStats(props) {
  const {
    levelsDifficult,
    levelsEasy,
    levelsMostAds
  } = props

  return (
    <div className="flex gap-x-6 p-3 rounded-xl bg-indigo-600">
      <div className="w-1/3 flex flex-col justify-between p-3 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
        <div className="flex justify-between items-center pb-2">
          <img src="/icons/lock.svg" alt="Users" className="h-8 w-8" />
          <p className="text-xl text-regular">Top 10 Difficult Levels</p>
        </div>
        <div className="grow flex flex-col items-center pt-2">
          <div className="w-4/5 flex items-center py-1 px-2 border-b border-gray-300 text-sm text-slate-600 text-bold">
            <p className="w-1/2 px-2 text-center">Level</p>
            <p className="w-1/2 px-2 text-center">Failed / User</p>
          </div>

          { levelsDifficult.map((level: object, index: number) => (
            <div key={ index } className={"w-4/5 flex items-center px-2 text-sm text-slate-600 text-medium " + (index % 2 !== 0 ? 'bg-slate-100/70' : '')}>
              <p className="w-1/2 px-2 text-center">{ level.level }</p>
              <p className="w-1/2 px-2 text-center">{ level.failed_per_user }</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3 flex flex-col justify-between p-3 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
        <div className="flex justify-between items-center pb-2">
          <img src="/icons/lock.svg" alt="Users" className="h-8 w-8" />
          <p className="text-xl text-regular">Top 10 Easy Levels</p>
        </div>
        <div className="grow flex flex-col items-center pt-2">
          <div className="w-4/5 flex items-center py-1 px-2 border-b border-gray-300 text-sm text-slate-600 text-bold">
            <p className="w-1/2 px-2 text-center">Level</p>
            <p className="w-1/2 px-2 text-center">Failed / User</p>
          </div>

          { levelsEasy.map((level: object, index: number) => (
            <div key={ index } className={"w-4/5 flex items-center px-2 text-sm text-slate-600 text-medium " + (index % 2 !== 0 ? 'bg-slate-100/70' : '')}>
              <p className="w-1/2 px-2 text-center">{ level.level }</p>
              <p className="w-1/2 px-2 text-center">{ level.failed_per_user }</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3 flex flex-col justify-between p-3 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
        <div className="flex justify-between items-center pb-2">
          <img src="/icons/clapper-board.svg" alt="Users" className="h-8 w-8" />
          <p className="text-xl text-regular">Top 10 Levels Requiring Ads</p>
        </div>
        <div className="grow flex flex-col items-center pt-2">
          <div className="w-4/5 flex items-center py-1 px-2 border-b border-gray-300 text-sm text-slate-600 text-bold">
            <p className="w-1/2 px-2 text-center">Level</p>
            <p className="w-1/2 px-2 text-center">Ads Watched</p>
          </div>

          { levelsMostAds.map((level: object, index: number) => (
          <div key={ index } className={"w-4/5 flex items-center px-2 text-sm text-slate-600 text-medium " + (index % 2 !== 0 ? 'bg-slate-100/70' : '')}>
            <p className="w-1/2 px-2 text-center">{ level.level }</p>
            <p className="w-1/2 px-2 text-center">{ level.ads_watched }</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}