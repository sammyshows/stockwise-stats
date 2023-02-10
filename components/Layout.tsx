import Navbar from './Nav'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}