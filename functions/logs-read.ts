import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")

const handler: Handler = async (event, context) => {

  const logs = await client`
      SELECT ua.id,
             ua.user_id,
             email,
             code,
             tag,
             source,
             message,
             platform,
             TO_CHAR(ua.created_at at time zone 'aedt', 'DD/MM/YY HH24:mi') AS time
      FROM user_activity_logs AS ua LEFT JOIN users AS u ON ua.user_id = u.id 
      WHERE (email NOT IN ('sammymac.eng@gmail.com', 'v4wgv6sv4k@privaterelay.appleid.com') OR email IS NULL)
            AND ua.created_at > (NOW() - INTERVAL '5 days')
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
