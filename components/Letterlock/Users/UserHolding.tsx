import { BigNumber } from "bignumber.js"
import { formatNumber } from "@/helpers/math"
import { UserHoldingProp } from "@/interfaces/holding";

export default function UserHolding(holding: UserHoldingProp) {
  return (
    <div className={ holding.index % 2 !== 0 ? 'border-l-2 border-slate-300' : 'ml-0.5' }>
      <div className="flex ml-6 text-sm text-slate-600">
        <p className="">{ holding.symbol }</p>
        <p className="mx-2 min-w-min whitespace-nowrap">|&nbsp;&nbsp;{ holding.name }</p>
        { holding.exchange && <p className="truncate">|&nbsp;&nbsp;{ holding.exchange }</p> }
      </div>

      <div className="flex ml-10 text-sm text-slate-600">
        <p className="mr-2">{ formatNumber(holding.currentPrice, parseFloat(holding.currentPrice) < 10 ? 3 : 2, false) }</p>
        { parseFloat(holding.currentPrice) - parseFloat(holding.prevClose) != 0 && <p className={ BigNumber(holding.currentPrice).minus(holding.prevClose).toNumber() < 0 ? 'text-bright-red' : 'text-emerald-400' }>{ `${formatNumber(BigNumber(holding.currentPrice).minus(holding.prevClose).toString(), 3, true) } (${formatNumber(BigNumber(holding.currentPrice).minus(holding.prevClose).div(holding.prevClose).times(100).toString(), 2, true)}%)`}</p> }
      </div>
    </div>
  )
}