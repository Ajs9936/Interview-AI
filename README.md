# Interview-AI

Interview-AI is a small full-stack app for practicing technical interviews. It includes:

- a Backend API (Node + Express) that manages users, interview reports and an AI-backed service; and
- a Frontend (React + Vite) that provides the interview UI and user flows.

This README gives a quick overview and the most common commands to get the project running locally.

**Repository layout**

- `Backend/` — Express server, routes, controllers, models, and `services/ai.service.js`.
- `Frontend/` — Vite + React app with feature folders for `auth` and `interview`.

## Prerequisites

- Node.js (16 or newer recommended)
- npm or yarn

## Quick start (development)

1) Start the backend API

```bash
cd Backend
npm install
# dev: runs server with automatic reload if configured (e.g. nodemon)
npm run dev || npm run start
```

2) Start the frontend dev server

```bash
cd Frontend
npm install
npm run dev
```

3) Open the app in your browser at the URL shown by Vite (commonly http://localhost:5173).

Notes:
- If `npm run dev` is not defined in a package, `npm run start` is the fallback.
- The backend commonly runs on `http://localhost:3000` (check `Backend/package.json` or `src/app.js`).

## Environment variables

The backend may expect environment variables. Create a `.env` file in `Backend/` with at least:

```
PORT=3000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
# If using OpenAI or similar AI provider:
OPENAI_API_KEY=your_api_key
```

Do not commit `.env` files — they are included in the global ignores in `.gitignore_global`.

## Useful commands

- Install dependencies (backend): `cd Backend && npm install`
- Start backend (dev): `cd Backend && npm run dev`
- Start frontend: `cd Frontend && npm run dev`
- Run tests (if available): `npm test` in the corresponding folder

## Troubleshooting

- If ports conflict, change `PORT` in the backend `.env` or the frontend dev server port in `vite.config.js`.
- If the frontend cannot reach the backend, confirm the backend URL and CORS settings in `Backend/src/app.js`.

## Global gitignore

I added a global ignore file at [`.gitignore_global`](.gitignore_global). To enable it globally run:

Windows (PowerShell):

```powershell
git config --global core.excludesfile "%USERPROFILE%/.gitignore_global"
```

macOS / Linux:

```bash
git config --global core.excludesfile ~/.gitignore_global
```

## Contributing

- Fork the repo, create a feature branch, and open a pull request. Add clear commit messages.
- If you'd like, I can add a CONTRIBUTING.md with repo-specific guidelines.

## What changed

- Improved structure and quick-start steps for easier onboarding.
- Added environment variable guidance and troubleshooting tips.

If you want the README shortened further, transformed into a developer quickstart, or expanded into separate contributor docs, tell me which format you prefer.
