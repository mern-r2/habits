import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/', (req, res) => {
  return 'Hello World!'
});

app.get('/habits', async (req, res) => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Beber',
      }
    }
  });

  return habits;
});

app.listen({
  port: 3333,
}).then(() => {
  console.log('listening on port 3333')
});