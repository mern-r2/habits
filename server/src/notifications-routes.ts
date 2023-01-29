import WebPush from 'web-push';
import { FastifyInstance } from "fastify";
import { z } from 'zod';

const publicKey = ''; // generate with WebPush.generateVAPIDKeys() and copy here
const privateKey = ''; // generate with WebPush.generateVAPIDKeys() and copy here

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
      publicKey,
    }
  });

  app.post('/push/register', (req, res) => {
    return res.status(201).send();
  });

  app.post('/push/send', async (req, res) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string()
        })
      })
    });

    const { subscription } = sendPushBody.parse(req.body);
    WebPush.sendNotification(subscription, 'Hello from Backend');

    return res.status(201).send();
  });
}