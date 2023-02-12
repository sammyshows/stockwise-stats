import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")

const handler: Handler = async (event, context) => {

  const users = await client`
        SELECT id,
               email,
               device_model AS device_model,
               account_type AS account_type,
               stockwise_version AS stockwise_version,
               device_os as device_os,
               TO_CHAR(created_at at time zone 'aedt', 'DD/MM/YYYY') AS date_joined
        FROM users
        ORDER BY created_at DESC;`

  return {
    // headers: {
    //   'Access-Control-Allow-Origin': 'https://www.admin.stockwise.app',
    // },
    body: JSON.stringify({
      users: users
    }),
    statusCode: 200
  }
}

export { handler }
