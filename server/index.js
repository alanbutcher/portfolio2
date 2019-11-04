
const express = require('express');
const next = require('next');
const routes = require('../routes');
const mongoose = require('mongoose');

//SERVICE
const authService = require('./services/auth');

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

mongoose.connect('mongodb+srv://alanbutcher:alanbutcher@portfolio-guf0j.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true })
  .then(() => console.log('Database Connected'))
  .catch(err => console.error(err))

app.prepare().then(() => {

  const server = express();

  server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
    return res.json(secretData)
  })

  server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
    
    return res.json(secretData)
  })



  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000;

  server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized Access'});
    }
  });

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port: ' + PORT)
  })

})
