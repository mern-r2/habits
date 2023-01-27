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

All 3 projects are run in the same way: installing the dependencies then running.

```sh
# Install dependencies
$ cd <project> 
$ npm install

# Run project
$ npm start
```

However, the server needs database configuration before running:

1. Go to `server` folder and inside a file name `.env` put the database url.

```sh
DATABASE_URL="file:./dev.db"
```

2. Run DB migrations.

```sh
npx prisma migrate dev
```

It also may be needed to change the IP addresses used on files:
- [axios.ts](./client/src/lib/axios.ts) (web)
- [axios.ts](./mobile/src/lib/axios.ts) (mobile)
- [server.ts](./server/src/server.ts) (server)

For the server a host property would be added.

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
