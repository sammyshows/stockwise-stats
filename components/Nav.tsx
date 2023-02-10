import { useRouter } from 'next/router'
import { Navbar } from "flowbite-react";

export default function Nav() {
  const routePath = useRouter().pathname

  return (
    <Navbar fluid={true} rounded={true} className="border-b border-slate-600 bg-slate-700">
      <Navbar.Brand to="/">
        <img src="/icon.png" className="mr-2 h-10 sm:h-11 drop-shadow-sm" style={{ filter: "invert(21%) sepia(48%) saturate(426%) hue-rotate(22deg) brightness(97%) contrast(90%)" }} alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-bold text-emerald-400 drop-shadow-sm">Stockwise Stats</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">
          <span className={ routePath === '/' ? 'text-emerald-400' : 'text-slate-300' }>Overview</span>
        </Navbar.Link>
        <Navbar.Link href="/users">
          <span className={ routePath === '/users' ? 'text-emerald-400 underline underline-offset-4' : 'text-slate-300' }>Users</span>
        </Navbar.Link>
        <Navbar.Link href="/stats">
          <span className={ `pr-10 ${routePath === '/stats' ? 'text-emerald-400' : 'text-slate-300' }` }>Stats</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}