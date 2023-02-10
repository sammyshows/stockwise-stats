import Head from 'next/head'
import UsersTableHead from "@/components/Users/UsersTableHead";
import UsersTableRow from "@/components/Users/UsersTableRow";

export default function Users() {
  const users = [
    { email: 'sammymac.eng@gmail.com', accountType: 'IDP', stockwiseVersion: '1.9', deviceModel: 'SM-GUE3', osVersion: '16.1', dateJoined: '28/06/2022' },
    { email: 'celinemalfait7@gmail.com', accountType: 'IDP', stockwiseVersion: '1.9', deviceModel: 'SM-GUE3', osVersion: '16.1', dateJoined: '28/06/2022' },
    { email: 'samrmccarthy6@gmail.com', accountType: 'IDP', stockwiseVersion: '1.9', deviceModel: 'SM-GUE3', osVersion: '16.1', dateJoined: '28/06/2022' }
  ]

  return (
    <>
      <Head>
        <title>Stockwise Stats</title>
        <meta name="description" content="Stockwise Stats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="px-10 pt-10">
        <h1 className="text-5xl pb-10 font-semibold text-emerald-400">Overview</h1>

        <div className="flex flex-col border border-emerald-800 rounded">
          <UsersTableHead />
          { users.map((user, index) => (
            <UsersTableRow
              key={ index }
              index={ index }
              email={ user.email }
              accountType={ user.accountType }
              stockwiseVersion={ user.stockwiseVersion }
              deviceModel={ user.deviceModel }
              osVersion={ user.osVersion }
              dateJoined={ user.dateJoined } />
          ))}
        </div>
      </div>
      </main>
    </>
  )
}