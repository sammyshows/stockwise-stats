import { Handler } from "@netlify/functions";
const client = require("../database/client.ts")

const handler: Handler = async (event, context) => {
  try {
    if (!event.body)
      return { statusCode: 400, body: 'Invalid request, missing the parameter body.' }

    const { user } = JSON.parse(event.body)
  
    await client`
      UPDATE letterlock_user_stats
      SET test_user = ${user.testUser}
      WHERE user_id = ${user.id}`
  
    return { statusCode: 200 }
  } catch (error) {
    console.error(error)
    return { statusCode: 500 }
  }
}

export { handler }
