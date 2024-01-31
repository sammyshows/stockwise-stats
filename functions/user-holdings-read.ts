import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")

const handler: Handler = async (event, context) => {
  if (!event.body) return { statusCode: 400, body: 'invalid request, you are missing the parameter body' }
  
  const eventBody = JSON.parse(event.body)

  const holdings = await client`
        SELECT TO_CHAR(p.created_at at time zone 'aedt', 'MM/DD/YYYY') AS portfolio_create_date,
               TO_CHAR(h.created_at at time zone 'aedt', 'MM/DD/YYYY') AS holding_create_date,
               p.id AS portfolio_id,
               h.id AS holding_id,
               p.name AS portfolio_name,
               a.symbol,
               a.name AS asset_name,
               a.exchange,
               a.current_price,
               a.prev_close
        FROM users AS u 
            INNER JOIN portfolios AS p ON p.user_id = u.id 
            INNER JOIN holdings AS h ON h.portfolio_id = p.id 
            INNER JOIN assets AS a ON a.id = h.asset_id 
        WHERE u.id = ${eventBody.userId}
        ORDER BY p.created_at DESC, a.symbol ASC;`

  return {
    // headers: {
    //   'Access-Control-Allow-Origin': 'https://www.admin.stockwise.app',
    // },
    body: JSON.stringify({
      holdings: holdings
    }),
    statusCode: 200
  }
}

export { handler }
