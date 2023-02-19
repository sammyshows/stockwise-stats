import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")

const handler: Handler = async (event, context) => {
  const eventBody = JSON.parse(event.body)

  const user = await client`
        SELECT email,
               device_model,
               account_type,
               stockwise_version,
               device_os,
               TO_CHAR(created_at at time zone 'aedt', 'MM/DD/YYYY') AS created_at
        FROM users
        WHERE id = ${eventBody.userId};`

  return {
    // headers: {
    //   'Access-Control-Allow-Origin': 'https://www.admin.stockwise.app',
    // },
    body: JSON.stringify({
      user: user[0]
    }),
    statusCode: 200
  }
}

export { handler }
