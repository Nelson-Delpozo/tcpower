# Technical Context: Landscaping Waitlist Landing Page

## 1. Core Technologies

*   **Framework:** Remix (Run)
    *   The existing project structure in `/Users/nelsondelpozo/Desktop/tcpower` is a Remix application. We will leverage this for building the landing page and the API endpoint for waitlist signup.
    *   Remix allows for server-side rendering (SSR) and client-side enhancements, and can handle both frontend and backend logic within the same framework.
*   **Programming Language:** TypeScript
    *   Indicated by `tsconfig.json` and numerous `.ts`/`.tsx` files.
*   **Styling:** Tailwind CSS
    *   Indicated by `tailwind.config.ts` and `app/tailwind.css`. We will use Tailwind for styling the landing page.
*   **Database:** PostgreSQL (hosted on Neon)
    *   As per the project brief.
*   **ORM/Database Client:** Prisma
    *   Indicated by `prisma/schema.prisma` and `prisma/seed.ts`. Prisma will be used to interact with the Neon Postgres database from the Remix backend.
*   **Deployment Platform:** Vercel
    *   As per the project brief, using the Vercel CLI. Vercel has excellent support for Remix applications.

## 2. Development Environment & Setup

*   **Local Development:**
    *   The Remix development server (likely `npm run dev` based on typical Remix setups) will be used for local development and testing.
*   **Database Connection:**
    *   A Neon Postgres database connection string will be required. This will be stored as an environment variable (e.g., in a `.env` file, which should be gitignored).
    *   Prisma will manage database migrations (`prisma migrate dev`) and client generation (`prisma generate`).
*   **Version Control:** Git (assumed, highly recommended).
    *   Changes should be committed regularly.
    *   A `.gitignore` file is present and should be maintained.

## 3. Project Structure (Leveraging Existing Remix Structure)

*   **Landing Page Route:** A new route will be created within `app/routes/`, for example, `app/routes/_index.tsx` could be modified or a new route like `app/routes/landing.tsx` created to serve as the main landing page.
*   **API Endpoint:** A Remix action function within the landing page route file (or a dedicated API route like `app/routes/api.signup.tsx`) will handle the form submission.
*   **Database Logic:** Prisma client interactions will likely be encapsulated in server-side files, possibly within `app/models/` (similar to existing `note.server.ts`, `user.server.ts`) or directly within the Remix action.
*   **Static Assets:** Images or other static assets will be placed in the `public/` directory.

## 4. Key Technical Considerations & Decisions

*   **Leverage Existing Remix Stack:** Instead of plain HTML/JS and a separate serverless function as initially brainstormed in `systemPatterns.md`, we will use the capabilities of the existing Remix application. This simplifies the architecture and development process.
    *   The `systemPatterns.md` might need an update to reflect this more concrete decision once the plan is finalized.
*   **Prisma for Database Operations:** Use Prisma for type-safe database access and migrations.
*   **Environment Variables:** Database credentials and other sensitive information MUST be managed via environment variables and NOT hardcoded. Vercel provides a system for managing these for deployed applications.
*   **Error Handling:** Implement robust error handling for both client-side form submissions and backend API calls/database operations.
*   **Security:**
    *   Basic input validation on both client and server.
    *   Protect against common web vulnerabilities (Remix and Prisma provide some built-in protections).

## 5. Dependencies (from existing `package.json`)

*   `@remix-run/*`: Core Remix packages.
*   `react`, `react-dom`: For UI.
*   `tailwindcss`: For styling.
*   `@prisma/client`, `prisma`: For database interaction.
*   `neonctl` (or similar for Neon CLI interaction if needed, though typically connection string is sufficient).
*   `vercel`: For Vercel CLI deployment.

(This section might be expanded as we inspect `package.json` more closely if needed.)
