# Active Context: TC Power & Battery - Waitlist Landing Page - Initial Setup

## 1. Current Focus

*   **Phase:** Project Initialization and Planning.
*   **Immediate Goal:** Finalize the initial project plan, confirm the technology stack, and prepare for development. This includes setting up the Memory Bank.

## 2. Key Decisions Made

*   **Leverage Existing Remix Project:** The project will be built within the existing Remix application located at `/Users/nelsondelpozo/Desktop/tcpower`. This supersedes earlier thoughts of a plain HTML/JS site with separate serverless functions for simplicity and to utilize the robust features of Remix.
*   **Technology Stack Confirmed:**
    *   Frontend: Remix (React, TypeScript), Tailwind CSS.
    *   Backend: Remix actions (Node.js environment via Vercel).
    *   Database: Neon Postgres.
    *   ORM: Prisma.
    *   Deployment: Vercel CLI.
*   **Memory Bank Initialized & Updated:** Core documentation files (`projectbrief.md`, `productContext.md`, `systemPatterns.md`, `techContext.md`, `activeContext.md`, `progress.md`) have been created and updated to reflect the TC Power & Battery business focus.
*   **Target Route Confirmed:** The landing page will be built by modifying `app/routes/_index.tsx`.
*   **Database Ready:** User has confirmed Neon database is set up and connection string will be provided via `.env`.
*   **Design Notes:** Theme will be green, user will provide images (use placeholders for now). Client information extracted from `public/TC_Power_and_Battery_Pitch_Deck_Updated.pdf`.

## 3. Next Steps (Planning & Preparation)

1.  **Finalize Landing Page Content:** Propose placeholder text based on the PDF and await user approval/modifications for headline, sub-headline, CTA, and success message.
2.  **Prisma Schema Update:**
    *   Define a new model in `prisma/schema.prisma` for `WaitlistEntry` (e.g., `id`, `email`, `createdAt`).
    *   User will add `DATABASE_URL` to `.env`.
    *   Run `npx prisma migrate dev --name add_waitlist_entry_table`.
    *   Run `npx prisma generate`.
3.  **Develop Landing Page (`app/routes/_index.tsx`):**
    *   Implement the React component with Tailwind CSS (green theme, placeholder images).
    *   Implement the Remix `action` for form submission and database interaction.
4.  **Vercel Project Setup & Deployment:**
    *   User links project to Vercel.
    *   User configures `DATABASE_URL` in Vercel environment variables.
    *   Deploy with `vercel deploy --prod`.

## 4. Open Questions/Considerations for User

*   **Landing Page Content (Text):** Awaiting final text for headline, sub-headline, CTA button, and success message. I will propose some placeholders based on the PDF.

## 5. Current State of Mind (Cline)

*   Memory Bank is up-to-date with current project understanding (TC Power & Battery, using `_index.tsx`).
*   Ready to propose specific landing page content and then move towards development.
