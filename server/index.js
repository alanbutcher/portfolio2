
const express = require('express')
const next = require('next')
const routes = require('../routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

const secretData = [
  {
    title: 'SecretData 1',
    description: 'Plans to build spaceship'
  },
  {
    title: 'SecretData 2',
    description: 'My secret passwords'
  }
]

app.prepare().then(() => {

  const server = express();

  server.get('/api/v1/secret', (req, res) => {
    return res.json(secretData)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port: ' + PORT)
  })

})
