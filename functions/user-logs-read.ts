import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")

const handler: Handler = async (event, context) => {
  if (!event.body) return { statusCode: 400, body: 'invalid request, you are missing the parameter body' }
  const eventBody = JSON.parse(event.body)

  const logs = await client`
      SELECT ua.id,
             email,
             code,
             tag,
             source,
             message,
             platform,
             TO_CHAR(ua.created_at at time zone 'aedt', 'DD/MM/YY HH24:mi') AS time
      FROM user_activity_logs AS ua INNER JOIN users AS u ON ua.user_id = u.id 
      WHERE ua.user_id = ${eventBody.userId}
      ORDER BY ua.created_at DESC;`

  return {
    // headers: {
    //   'Access-Control-Allow-Origin': 'https://www.admin.stockwise.app', // This can be process.env.DOMAIN... surely?
    // },
    body: JSON.stringify({
      logs: logs
    }),
    statusCode: 200
  }
}

export { handler }
