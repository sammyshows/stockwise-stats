export default function AdsStats(props) {
  const {
    androidUsers,
    iosUsers,
    ads1Day,
    ads7Days,
    ads28Days,
    adsLives,
    adsMoves,
    adsLivesAverage,
    adsMovesAverage,
    adsStreakAverage,
    levelAttempts1Day,
    levelAttempts7Days,
    levelAttempts28Days,
    levelSuccesses1Day,
    levelSuccesses7Days,
    levelSuccesses28Days
  } = props

  return (
    <div className="h-full w-2/3 flex rounded-r-xl rounded-bl-xl">
      <div className="w-1/2 flex flex-col">
        <div className="bg-ll-orange rounded-tr-xl">
          <div className="p-3 bg-blue-500 rounded-r-xl">
            <div className="h-36 w-full flex flex-col justify-between py-3 px-6 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
              <div className="flex justify-between items-center pb-2">
                <img src="/icons/users-black.svg" alt="Ads" className="h-8 w-8" />
                <p className="text-xl text-regular">Total users by OS</p>
              </div>
              <div className="grow flex justify-between items-end">
                <div className="pr-12 border-r border-slate-600">
                  <p className="text-slate-500 text-sm font-bold">total</p>
                  <p className="text-4xl text-medium">{ parseInt(androidUsers || 0) + parseInt(iosUsers || 0) }</p>
                </div>
                <div className="grow flex justify-between pl-12">             
                  <div>
                    <p className="text-slate-500 text-sm font-bold">android</p>
                    <p className="text-4xl text-medium">{ androidUsers }</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm text-right font-bold">ios</p>
                    <p className="text-4xl text-medium">{ iosUsers }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-ll-orange rounded-bl-xl">
          <div className="p-3 bg-indigo-600 rounded-t-xl">
            <div className="h-36 w-full flex flex-col justify-between py-3 px-6 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
              <div className="flex justify-between items-center pb-2">
                <img src="/icons/lock.svg" alt="Ads" className="h-8 w-8" />
                <p className="text-xl text-regular">Levels Accomplished</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-slate-500 text-xs font-bold">24 hr</p>
                  <p className="relative w-min text-4xl text-medium">
                    { levelSuccesses1Day }
                    <span className="absolute -top-0.5 ml-0.5 text-base text-gray-400">{ levelAttempts1Day }</span>
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold">7 days</p>
                  <p className="relative w-min text-4xl text-medium">
                    { levelSuccesses7Days }
                    <span className="absolute -top-0.5 ml-0.5 text-base text-gray-400">{ levelAttempts7Days }</span>
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold">28 days</p>
                  <p className="relative w-min text-4xl text-medium">
                    { levelSuccesses28Days }
                    <span className="absolute -top-0.5 ml-0.5 text-base text-gray-400">{ levelAttempts28Days }</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col">
        <div className="p-3 bg-ll-orange rounded-tr-xl rounded-tl-xl">
          <div className="h-36 w-full flex flex-col justify-between py-3 px-6 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
            <div className="flex justify-between items-center pb-2">
              <img src="/icons/clapper-board.svg" alt="Ads" className="h-8 w-8" />
              <p className="text-xl text-regular">Ads Watched Last</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-slate-500 text-xs font-bold">24 hr</p>
                <p className="text-4xl text-medium">{ ads1Day }</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold">7 days</p>
                <p className="text-4xl text-medium">{ ads7Days }</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold">28 days</p>
                <p className="text-4xl text-medium">{ ads28Days }</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-ll-orange rounded-br-xl">
          <div className="p-3 bg-ll-orange rounded-b-xl">
            <div className="h-36 w-full flex flex-col justify-between py-3 px-6 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
              <div className="flex justify-between items-center pb-2">
                <img src="/icons/clapper-board.svg" alt="Users" className="h-8 w-8" />
                <p className="text-xl text-regular">Averages</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="w-20 text-slate-500 text-xs font-bold">streak when moves ad</p>
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
        </div>

        {/* <div className="h-36 w-full flex flex-col justify-between py-3 px-6 bg-white rounded-2xl drop-shadow text-slate-600 duration-100">
          <div className="flex justify-between items-center pb-2">
            <img src="/icons/clapper-board.svg" alt="Ads" className="h-8 w-8" />
            <p className="text-xl text-regular">Ads Watched Total</p>
          </div>
          <div className="grow flex justify-between items-end">
            <div className="pr-8 border-r border-slate-600">
              <p className="text-slate-500 text-sm font-bold">total</p>
              <p className="text-4xl text-medium">{ parseInt(adsLives) + parseInt(adsMoves) }</p>
            </div>
            <div className="grow flex justify-between pl-8">             
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
        </div> */}
      </div>
    </div>
  )
}