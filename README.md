<h1 align="center"> Habits </h1>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-running">Running</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
  <img alt="Habits" src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/63b70dc36ba741628de50f63_aplicacao-web-nlw-setup.svg" width="100%">
</p>


## 💻 Project

Habits is an app to help tracking the habits of a person.

### Tech Stack

- [Node.js](https://nodejs.org/en/)
- [Fastify](https://www.fastify.io/)
- [SQLite](https://www.sqlite.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Axios](https://github.com/axios/axios)
- [Vite](https://vitejs.dev/)
- [Radix](https://www.radix-ui.com/)
- [Tailwind](https://tailwindcss.com/)
- [Nativewind](https://www.nativewind.dev/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)


## 🚀 Running

Do not forget to check the `General Configurations` at the end of this section.

### Server

Server needs database configuration before running.

1. Go to `server` folder and inside a file name `.env` put the database url.

```sh
DATABASE_URL="file:./dev.db"
```

2. Run DB migrations.

```sh
npx prisma migrate dev
```

```sh
# Install dependencies and run (still on server folder)
$ npm install
$ npm run dev
```

### Web Client

This one is the most straightforward.

```sh
# Install dependencies
$ cd client 
$ npm install

# Run project
$ npm run dev
```

### Mobile

Mobile is run by Expo.

```sh
# Install dependencies
$ cd mobile
$ npm install

# Run project
$ npx expo start
```

Sometimes the flag `--clear` must be appended to the end of running the mobile project.

### General Configurations

It also may be needed to change the IP addresses used on files for the exat IP instead of 'localhost':
- [axios.ts](./client/src/lib/axios.ts) (web)
- [axios.ts](./mobile/src/lib/axios.ts) (mobile)
- [server.ts](./server/src/server.ts) (server)

For the server a host property would be added.
The IP can be easily obtained after running on mobile (expo prints it on the console).

Moreover, public and private keu must be set in `notification-routes.ts` on server project.
Simply log `WebPush.generateVAPIDKeys()` and copy the value of the keys.


## 🔖 Layout

The project layout is available on [this link](https://www.figma.com/community/file/1195326661124171197).

<p align="center">
  <img style="float" src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/63b70ea90ae632674c3065fe_aplicacao-mobile-nlw-setup.svg" width="50%" />
</p>

[Figma](https://figma.com) account is needed.


## :memo: License

This project is under the MIT license. See [LICENSE](LICENSE) for more details.

---

From a Rocketseat course.
