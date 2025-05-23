# Stockwise & Letterlock Stats Dashboard

Welcome! This is a **Next.js**-powered admin dashboard for monitoring and managing two mobile apps: **Stockwise** and **Letterlock**. The dashboard provides insights, user management, and log viewing for both apps.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [API & Serverless Functions](#api--serverless-functions)
- [Database](#database)
- [Styling](#styling)

---

## Features

- **Login-protected dashboard** for admins
- **User management** for both Stockwise and Letterlock
- **View and filter logs** for user activity
- **Game insights** (e.g., level stats, ad stats, user stats)
- **Responsive, modern UI** with custom branding

---

## Tech Stack

- **Frontend:** Next.js (React, TypeScript)
- **Backend:** AWS / Netlify Lambda Functions (serverless, Node.js)
- **Database:** PostgreSQL (accessed via [`postgres`](https://github.com/porsager/postgres) npm package)
- **Styling:** Tailwind CSS, Flowbite, custom fonts
- **Authentication:** JWT (JSON Web Tokens), HTTP-only cookies

---

## Project Structure

- `/pages`  
  Next.js pages (routes). Includes:
  - `/login` – Login page
  - `/stockwise/*` – Stockwise dashboard pages
  - `/letterlock/*` – Letterlock dashboard pages
  - `_app.tsx` – App wrapper, handles authentication and layout selection

- `/components`  
  Reusable React components, grouped by feature (e.g., `Stockwise`, `Letterlock`, `Utility`).

- `/functions`  
  Netlify serverless functions (API endpoints). Examples:
  - `login.ts` – Handles authentication
  - `user-read.ts`, `users-read.ts` – Fetch user(s) from the database
  - `logs-read.ts`, `user-logs-read.ts` – Fetch logs
  - `letterlock-users-read.ts`, `letterlock-user-update.ts` – Letterlock-specific user management

- `/database`  
  Database client setup (`client.ts`), using the `postgres` npm package.

- `/styles`  
  Global and custom CSS, including font imports.

- `/public`  
  Static assets (logos, favicon, etc.)

- `netlify.toml`  
  Netlify configuration for local dev, redirects, and function bundling.

---

## Authentication

- **Login** is handled via a Netlify function (`/api/login`), which checks credentials and issues a JWT in an HTTP-only cookie.
- The app checks authentication status on every page load (except `/login`) and redirects to `/login` if not authenticated.
- **Note:** The current implementation uses a hardcoded user for demonstration. For production, use a secure user store and hashed passwords.

---

## API & Serverless Functions

All backend logic is implemented as **Netlify Functions** (serverless).  
API routes are available under `/api/*` and are mapped to `/functions/*` via Netlify configuration.

**Examples:**
- `/api/login` – Authenticate and set JWT cookie
- `/api/users-read` – Get all users
- `/api/user-read` – Get a single user
- `/api/logs-read` – Get recent logs
- `/api/letterlock-users-read` – Get Letterlock users
- `/api/letterlock-user-update` – Update Letterlock user properties

All functions use the shared PostgreSQL client in `/database/client.ts`.

---

## Database

- **PostgreSQL** is used for all persistent data.
- Connection is managed via the `postgres` npm package.
- The connection string is read from the `DATABASE_URL` environment variable.
- Queries are written using [Tagged Template Literals](https://github.com/porsager/postgres#usage).

---

## Styling

- **Tailwind CSS** is used for utility-first styling.
- **Flowbite** and **Flowbite React** provide additional UI components.
- **Custom fonts** (Poppins) are loaded via CSS.
- Responsive and modern design, with custom branding for each game.

