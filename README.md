# Mammoth Construction SPA

Single-page web application built with React + Vite.

## Stack

- React (SPA)
- Material UI (MUI) for reusable themed components
- Prettier for auto-formatting
- Netlify Forms for quote request submission

## Scripts

Run from project root:

- `npm run dev` - start React app
- `npm run dev:client` - start React app only
- `npm run build` - build frontend
- `npm run format` - format all files with Prettier
- `npm run format:check` - check formatting

## Quote Form

- Form name: `quote-request`
- Hosted with Netlify Forms (no custom server required)

## Ports

- Frontend: `http://localhost:5173`

## Netlify Deployment

This project is configured for Netlify static hosting of the React SPA.

- Netlify config is in `netlify.toml`.
- Build base is `client`, build command is `npm run build`, publish directory is `client/dist`.
- SPA routing fallback is configured so all routes serve `index.html`.

### Email Setup (Important)

After deployment, configure form notifications in Netlify:

1. Open your Netlify site dashboard.
2. Go to Forms and confirm submissions are being detected for `quote-request`.
3. Add an email notification destination: `bojanglesarby@aol.com`.

Once configured, quote form submissions will be sent to that inbox.
