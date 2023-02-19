import { useRouter } from 'next/router'
import { Navbar } from "flowbite-react";

export default function Nav() {
  const routePath = useRouter().pathname

  return (
    <Navbar fluid={true} rounded={true} className="border-b border-slate-300 bg-slate-100">
      <Navbar.Brand to="/">
        <img src="/icon.png" className="mr-2 h-10 sm:h-11 drop-shadow-sm" style={{ filter: "invert(21%) sepia(48%) saturate(426%) hue-rotate(22deg) brightness(97%) contrast(90%)" }} alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-bold text-emerald-400 drop-shadow-sm">Stockwise Stats</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">
          <span className={ routePath === '/' ? 'text-emerald-500 underline underline-offset-4' : 'text-slate-500' }>Overview</span>
        </Navbar.Link>
        <Navbar.Link href="/users">
          <span className={ routePath.split('/')[1] === 'users' ? 'text-emerald-500 underline underline-offset-4' : 'text-slate-500' }>Users</span>
        </Navbar.Link>
        <Navbar.Link href="/stats">
          <span className={ routePath.split('/')[1] === 'stats' ? 'text-emerald-500 underline underline-offset-4' : 'text-slate-500' }>Stats</span>
        </Navbar.Link>
        <Navbar.Link href="/logs">
          <span className={ `pr-10 ${routePath.split('/')[1] === 'logs' ? 'text-emerald-500 underline underline-offset-4' : 'text-slate-500' }` }>Logs</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}