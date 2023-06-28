import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")

const handler: Handler = async (event, context) => {

  const users = await client`
        SELECT user_id,
               (SELECT COUNT(*) FROM jsonb_object_keys(level_history)) AS levels_completed_count,
               ads_watched_for_lives AS ads_watched_lives,
               ads_watched_for_moves AS ads_watched_moves,
               zero_lives_tally AS zero_lives_tally,
               device_os as device_os,
               device_model AS device_model,
               stockwise_version AS stockwise_version,
               TO_CHAR(updated_at at time zone 'aedt', 'DD/MM/YYYY') AS updated_at,
               TO_CHAR(created_at at time zone 'aedt', 'DD/MM/YYYY') AS created_at
        FROM letterlock_user_stats
        WHERE device_model IS NOT NULL
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
