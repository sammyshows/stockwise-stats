import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")

const handler: Handler = async (event, context) => {

  const users = await client`
        SELECT lus.user_id,
               (SELECT COUNT(*) FROM jsonb_object_keys(CAST(level_history AS jsonb))) AS levels_completed_count,
               ads_watched_for_lives AS ads_watched_lives,
               ads_watched_for_moves AS ads_watched_moves,
               zero_lives_tally AS zero_lives_tally,
               device_os,
               device_model,
               username,
               letterlock_version AS letterlock_version,
               TO_CHAR(lus.updated_at at time zone 'aedt', 'DD/MM/YYYY') AS updated_at,
               TO_CHAR(lus.created_at at time zone 'aedt', 'DD/MM/YYYY') AS created_at
        FROM letterlock_user_stats AS lus
        INNER JOIN letterlock_settings AS ls ON ls.user_id = lus.user_id
        WHERE device_model IS NOT NULL
        ORDER BY lus.created_at DESC;`

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
