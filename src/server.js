import Fastify from 'fastify'
import dotenv from 'dotenv';

dotenv.config();

const fastify = Fastify({
  logger: {
    level: process.env.LOG_LEVEL || 'info'
  }
})

fastify.addHook('onSend', async (request, reply, payload) => {
    reply.header('fly-region', process.env.FLY_REGION || '');
})

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '::')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()