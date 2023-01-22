import dayjs from "dayjs";
import { FastifyInstance } from "fastify";
import { z } from "zod";
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

  app.post('/habits', async (req, _res) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(
        z.number().min(0).max(6)
      ),
    });
    
    const { title, weekDays } = createHabitBody.parse(req.body);

    const today = dayjs().startOf('day').toDate();

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map(weekDay => {
            return {
              week_day: weekDay,
            }
          })
        }
      }
    });
  });
}
