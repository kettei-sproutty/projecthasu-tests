import { NextApiHandler } from 'next'

const auth: NextApiHandler = (req, res) => {
  if (req.method === 'POST' && 'logout' in req.body && req.body.logout) {
    res.setHeader('Set-Cookie', 'auth=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT')
  } else if ('auth' in req.cookies) {
    return res.status(200).send({ isAuthenticated: true, username: req.cookies.auth })
  }

  return res.status(200).send({ isAuthenticated: false, username: null })
}

export default auth
