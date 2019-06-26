const path = require('path')
const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/', // optional: default '/'
})

fastify.get('/another/path', function (req, reply) {
  
})

// fastify.get('/', async (request, reply) => {
//   reply.sendFile('index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
// })

// fastify.get('/', async (request, reply) => {
//   reply.type('application/json').code(200)
//   return { hello: 'world' }
// })

fastify.listen(8080, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})