# DD-App

This is an demo app that's meant to highlight the knowledge of the developer. It uses several tools, including:
- Node.js
- Next.js
- NextAuth
- Drizzle ORM
- Postgres (for database)
- Keyclaok (for auth)

## Running
A few things are required to run the app.
1. Install dependencies: `yarn`
2. Create database bindings: `yarn db:migrate`
3. **Fill out env variables**: see .env.example and create a .env with those fields
4. Run accompanying docker containers. These are used for login, as well as storing data.
5. Run `yarn db:seed` to insert sample data. This uses faker to insert some data regarding businesses and tables. 
6. Finally, run the app. `yarn dev`. When the app is finished, it will be able to be run in a docker container, but for now it can't be. 