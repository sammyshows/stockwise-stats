import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")
const { requireAuth } = require('../api/auth');


const handler: Handler = requireAuth(async (event, context) => {
  const eventBody = JSON.parse(event.body)

  await client`
        INSERT INTO users (id, email, account_type)
        VALUES (${eventBody.uuid}, ${eventBody.email}, 0);`

  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200
  }
})

export { handler }
