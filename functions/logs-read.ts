import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")

const handler: Handler = async (event, context) => {

  const logs = await client`
      SELECT ua.id,
             email,
             code,
             tag,
             source,
             message,
             platform,
             TO_CHAR(ua.created_at at time zone 'aedt', 'DD/MM/YY HH:mi') AS time
      FROM user_activity_logs AS ua LEFT JOIN users AS u ON ua.user_id = u.id 
      WHERE email != 'sammymac.eng@gmail.com' 
      ORDER BY ua.created_at DESC;`

  return {
    // headers: {
    //   'Access-Control-Allow-Origin': 'https://www.admin.stockwise.app',
    // },
    body: JSON.stringify({
      logs: logs
    }),
    statusCode: 200
  }
}

export { handler }
