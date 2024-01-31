const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const users = [{ username: 'sammc', password: 'funlock99!' }];
const JWT_SECRET = 'd56gy7vtrcd865yujhbgy896';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    if (event.headers.cookie) {
      const cookies = cookie.parse(event.headers.cookie)
      const token = cookies.token
      const decoded = jwt.verify(token, JWT_SECRET)
      
      if (decoded) {
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Already logged in' }),
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=${10 * 365 * 24 * 60 * 60}; Secure; SameSite=Strict`
          }
        };
      }
    }

    const { username, password } = JSON.parse(event.body);
    const user = users.find(u => u.username === username);
    if (!user || user.password !== password) {
      return { statusCode: 401, body: 'Unauthorized' };
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '10y' });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Login successful' }),
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=${10 * 365 * 24 * 60 * 60}; Secure; SameSite=Strict`
      }
    };
  } catch (error) {
    return { statusCode: 400, body: 'Bad Request' };
  }
};
