import cors from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { env } from '@repo/env'
import { Elysia } from 'elysia'
import { getRooms } from '@/http/routes/get-rooms'

const swaggerPlugin = swagger({})

const corsPlugin = cors({
  origin: 'http://localhost:3001',
})

const app = new Elysia()
  .use(swaggerPlugin)
  .use(corsPlugin)
  .get('/health', () => 'OK')
  .group('/rooms', (rooms) => rooms.use(getRooms))
  .listen(env.SERVER_PORT)

console.info(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
