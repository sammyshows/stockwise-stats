import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { formatNumber } from "@/helpers/math"
import Spinner from "@/components/Utility/Spinner";
import UserOverview from "@/components/Users/UserOverview";
import LogsTableHead from "@/components/Logs/LogsTableHead";
import LogsTableRow from "@/components/Logs/LogsTableRow";
import UserPortfolio from "@/components/Users/UserPortfolio";
import UserStudy from "@/components/Users/UserStudy";

export default function Users() {
  const [ activeTab, setActiveTab ] = useState('overview')
  const [ user, setUser ] = useState(null as (object | null))
  const [ logs, setLogs ] = useState(null as (Array<object> | null))
  const [ portfolios, setPortfolios ] = useState(null as (Array<object> | null))
  const [ inProgressStudies, setInProgressStudies ] = useState(null as (Array<object> | null))
  const [ completedStudies, setCompletedStudies ] = useState(null as (Array<object> | null))
  const userId = useRouter().query.user

  useEffect(() => {
    if (!userId)
      return

    const getUser = async (): Promise<void> => {
      return await fetch('/api/user-read', {
        method: 'POST',
        body: JSON.stringify({
          userId: userId
        })
      })
        .then(response => response.json())
        .then(res => setUser(res.user))
    }

    const getLogs = async (): Promise<void> => {
      return await fetch('/api/user-logs-read', {
        method: 'POST',
        body: JSON.stringify({
          userId: userId
        })
      })
        .then(response => response.json())
        .then(res => setLogs(res.logs))
    }

    const getPortfolios = async (): Promise<void> => {
      return await fetch('/api/user-holdings-read', {
        method: 'POST',
        body: JSON.stringify({
          userId: userId
        })
      })
        .then(response => response.json())
        .then(res => {
          const portfolios = sortPortfolios(res.holdings)
          setPortfolios(portfolios)
        })
    }

    const getStudies = async (): Promise<void> => {
      return await fetch('/api/user-studies-read', {
        method: 'POST',
        body: JSON.stringify({
          userId: userId
        })
      })
        .then(response => response.json())
        .then(res => {
          setInProgressStudies(res.studies.filter(study => (study.type === 0 && study.completed_qs < 6) || (study.type === 1 && study.completed_qs < 9)))
          setCompletedStudies(res.studies.filter(study => (study.type === 0 && study.completed_qs === 6) || (study.type === 1 && study.completed_qs === 9)))
        })
    }

    getUser()
    getLogs()
    getPortfolios()
    getStudies()
  }, [userId]);

  const sortPortfolios = (holdings) => {
    let portfolios = {}

    holdings.forEach((holding) => {
      if (portfolios.hasOwnProperty(holding.portfolio_id)) // If this portfolio has already been added to the object
        portfolios[holding.portfolio_id].push(holding)
      else
        portfolios[holding.portfolio_id] = [ holding ]
    })

    return portfolios
  }

  if (user) {
    return (
      <div className="grow flex flex-col px-10 py-10 overflow-scroll">
        <h1 className="text-4xl font-semibold text-emerald-400">{ user.email }</h1>

        <p className="my-2 text-slate-500">
          Joined on { new Date(user.created_at).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }
          <span className="ml-2 text-xs">({ formatNumber(Math.abs(Date.now() - new Date(user.created_at)) / 1000, 2, false).slice(0,-3) } seconds ago...)</span>
        </p>

        <div className="flex justify-start gap-x-4 border-b-4 border-amber-600/40 my-4 font-bold">
          <button onClick={ () => setActiveTab('overview') } className={ 'py-1.5 px-3 rounded-t-lg duration-100 ' + (activeTab === 'overview' ? 'text-white bg-amber-600/40' : 'text-slate-400 hover:bg-slate-100') }>Overview</button>
          <div className="h-full w-0.5 ml-4 mr-4 bg-amber-600/40 rounded-t"></div>
          <button onClick={ () => setActiveTab('activity') } className={ 'py-1.5 px-3 rounded-t-lg duration-100 ' + (activeTab === 'activity' ? 'text-white bg-amber-600/40' : 'text-slate-400 hover:bg-slate-100') }>Activity</button>
          <button onClick={ () => setActiveTab('portfolios') } className={ 'py-1.5 px-3 rounded-t-lg duration-100 ' + (activeTab === 'portfolios' ? 'text-white bg-amber-600/40' : 'text-slate-400 hover:bg-slate-100') }>Portfolios</button>
          <button onClick={ () => setActiveTab('studies') } className={ 'py-1.5 px-3 rounded-t-lg duration-100 ' + (activeTab === 'studies' ? 'text-white bg-amber-600/40' : 'text-slate-400 hover:bg-slate-100') }>Studies</button>
        </div>

        { activeTab === 'overview' && ( portfolios && inProgressStudies && completedStudies && logs ? (
          <UserOverview user={ user }
                        portfolios={ portfolios }
                        inProgressStudies={ inProgressStudies }
                        completedStudies={ completedStudies }
                        lastLogTime={ logs.length ? logs[0].time : null } />
        ) : (<Spinner />))}

        { activeTab === 'activity' &&
          <div className="flex flex-col grow border border-emerald-800 rounded overflow-scroll">
            <LogsTableHead />
            { logs?.map((log, index) => (
              <LogsTableRow
                key={ index }
                index={ index }
                id={ log.id }
                email={ log.email }
                code={ log.code }
                tag={ log.tag }
                source={ log.source }
                message={ log.message }
                platform={ log.platform }
                time={ index !== logs.length -1 && logs[index + 1].time === log.time ? '' : log.time } />
            ))}
          </div>
        }

        { activeTab === 'portfolios' &&
          <div className="grid grid-cols-3 gap-y-6 py-3">
            { Object.keys(portfolios).map((key) => (
              <UserPortfolio holdings={ portfolios[key] }
                             key={ key } />
            ))}
          </div>
        }

        { activeTab === 'studies' &&
          <div className="h-full grid grid-cols-2 p-3 divide-x-2 divide-slate-300">
            <div className="w-full flex flex-col items-center gap-y-4">
              <h2 className="text-lg text-emerald-500">IN PROGRESS</h2>
              { inProgressStudies.map((study, index) => (
                <UserStudy { ...study }
                           key={ index }
                           index={ index } />
              ))}
            </div>

            <div className="w-full flex flex-col items-center gap-y-4">
              <h2 className="text-lg text-emerald-500">COMPLETED</h2>
              { completedStudies.map((study, index) => (
                <UserStudy { ...study }
                           completed={ true }
                           key={ index }
                           index={ index } />
              ))}
            </div>
          </div>
        }
      </div>
    )
  }
}
