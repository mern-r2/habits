import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";

export async function appRoutes(app : FastifyInstance) {
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
}