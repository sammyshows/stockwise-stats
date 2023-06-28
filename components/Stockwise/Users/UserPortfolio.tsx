import { useMemo, useState } from 'react';
import UserHolding from "@/components/Stockwise/Users/UserHolding";
import { UserHoldingProp } from "@/interfaces/holding";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function UserPortfolio(portfolio: Array<UserHoldingProp>) {
  const [ showAllHoldings, setShowAllHoldings ] = useState(false) // if false a maximum 3 holdings are shown

  const holdings = useMemo(() => {
    return showAllHoldings ? portfolio.holdings : portfolio.holdings.slice(0,3)
  }, [showAllHoldings]);

  const toggleAllHoldings = () => { setShowAllHoldings(!showAllHoldings); console.log(showAllHoldings) }

  return (
    <div className="px-5">
      <div className="flex items-center">
        <p className="mr-2 text-amber-600">{ holdings[0].portfolio_name }</p>
        <p className="text-xs text-slate-400">|&nbsp;&nbsp;{ new Date (holdings[0].portfolio_create_date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }</p>
      </div>
      <TransitionGroup>
          { holdings?.map((holding, index) => (
            <CSSTransition key={ index } nodeRef={ holding.nodeRef } timeout={ 300 } classNames={ showAllHoldings ? 'top-to-bottom' : 'bottom-to-top' }>
              <UserHolding
                ref={ holding.nodeRef }
                key={ index }
                index={ index }
                id={ holding.holding_id }
                symbol={ holding.symbol }
                name={ holding.asset_name }
                exchange={ holding.exchange }
                currentPrice={ holding.current_price }
                prevClose={ holding.prev_close } />
            </CSSTransition>
          ))}
      </TransitionGroup>

      { portfolio.holdings.length > 3 && <button onClick={ () => toggleAllHoldings() } className="mt-2 py-0.5 px-3 rounded text-xs bg-slate-300/70 text-slate-600 hover:bg-slate-200 duration-200">{ showAllHoldings ? `View less` : `View more (+${portfolio.holdings.length - 3} holdings)` }</button> }
    </div>
  )
}