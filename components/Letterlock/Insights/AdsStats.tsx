export default function AdsStats(props) {
  const {
    adsLives,
    adsMoves,
    adsLivesAverage,
    adsMovesAverage,
    adsStreakAverage,
    levelsMostAds
  } = props

  return (
    <div className="h-full w-full flex p-3 rounded-xl bg-ll-orange gap-x-6">
      <div className="flex flex-col gap-y-6">
        <div className="h-36 w-80 flex flex-col justify-between p-3 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
          <div className="flex justify-between items-center pb-2">
            <img src="/icons/clapper-board.svg" alt="Ads" className="h-8 w-8" />
            <p className="text-xl text-regular">Ads Watched</p>
          </div>
          <div className="grow flex justify-between items-end">
            <div className="pr-6 border-r border-slate-600">
              <p className="text-slate-500 text-sm font-bold">total</p>
              <p className="text-4xl text-medium">{ parseInt(adsLives) + parseInt(adsMoves) }</p>
            </div>
            <div className="grow flex justify-between pl-6">             
              <div>
                <p className="text-slate-500 text-sm font-bold">for lives</p>
                <p className="text-4xl text-medium">{ adsLives }</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-bold">for moves</p>
                <p className="text-4xl text-medium">{ adsMoves }</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-36 w-80 flex flex-col justify-between p-3 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
          <div className="flex justify-between items-center pb-2">
            <img src="/icons/clapper-board.svg" alt="Users" className="h-8 w-8" />
            <p className="text-xl text-regular">Averages</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="w-20 text-slate-500 text-xs font-bold">streak when ad watched</p>
              <p className="text-4xl text-medium">{ adsStreakAverage }</p>
            </div>
            <div>
              <p className="w-16 text-slate-500 text-xs font-bold">life ads per user</p>
              <p className="text-4xl text-medium">{ adsLivesAverage }</p>
            </div>
            <div>
              <p className="w-20 text-slate-500 text-xs font-bold">moves ads per user</p>
              <p className="text-4xl text-medium">{ adsMovesAverage }</p>
            </div>
          </div>
        </div>        
      </div>

      <div className="grow flex flex-col justify-between p-3 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
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