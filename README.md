# Bookmore

Node.js + Express + EJS bookstore, PostgreSQL via Sequelize.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

The database, tables and seed data are created automatically on first run.

## Config

Defaults: `postgres` / `bookmore` on `localhost:5432`, database `bookmore`. To change any of it, copy `.env.example` to `.env`.

## API docs

http://localhost:3000/api-docs (log in at `/login` first for the endpoints that need a session)