import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")

const handler: Handler = async (event, context) => {
  const eventBody = JSON.parse(event.body)

  const studies = await client`
        SELECT id AS study_id,
               name,
               symbol,
               type,
               notes,
               completed_qs,
               TO_CHAR(studies.updated_at, 'MM/DD/YYYY') AS updated_date
        FROM studies
        WHERE user_id = ${eventBody.userId}
        ORDER BY studies.updated_at DESC;`

  return {
    // headers: {
    //   'Access-Control-Allow-Origin': 'https://www.admin.stockwise.app', // This can be process.env.DOMAIN... surely?
    // },
    body: JSON.stringify({
      studies: studies
    }),
    statusCode: 200
  }
}

export { handler }
