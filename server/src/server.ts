import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes';
import { notificationRoutes } from './notifications-routes';

const app = Fastify();

app.register(cors);
app.register(appRoutes);
app.register(notificationRoutes);

// fastify does not accepts connections with IP by default
// so we need to set the host with our IP (mobile client issues)
app.listen({
  port: 3333,
}).then(() => {
  console.log('listening on port 3333')
});