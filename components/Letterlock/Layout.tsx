import Navbar from './Nav'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <Navbar />
      <main className="grow flex flex-col min-h-0">{children}</main>
    </div>
  )
}