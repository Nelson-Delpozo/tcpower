# Project Brief: TC Power & Battery - Waitlist Landing Page

## 1. Project Overview

The goal is to create a simple, attractive landing page for **TC Power & Battery**, an upcoming outdoor power equipment retail and repair center. The primary function of this page is to capture email addresses for a waitlist, informing interested parties about the grand opening, special offers, and news.

## 2. Core Requirements

*   **Landing Page:** A single-page website (modifying `app/routes/_index.tsx` in the existing Remix project).
    *   Visually appealing, reflecting an outdoor power equipment/modern tool theme (primary color green, using placeholder images).
    *   Clear call-to-action (CTA) for waitlist signup.
    *   Responsive design (desktop and mobile).
*   **Waitlist Signup:**
    *   Input field for email address.
    *   Submission button.
    *   Confirmation message upon successful signup.
*   **Database Integration:**
    *   Store submitted email addresses in a Postgres database hosted on Neon.
*   **Deployment:**
    *   Deploy the landing page to Vercel using the Vercel CLI.

## 3. Key Success Metrics

*   Successfully capture and store email addresses.
*   Smooth deployment to Vercel.
*   Positive user experience on the landing page.

## 4. Scope

*   **In Scope:**
    *   Frontend development of the landing page using Remix (React, TypeScript) and Tailwind CSS.
    *   Backend logic (Remix action) for handling email submissions.
    *   Database schema design (Prisma model) and setup on Neon (user-provided connection string).
    *   Deployment configuration for Vercel (via Vercel CLI).
*   **Out of Scope (for initial version):**
    *   User authentication (beyond email capture).
    *   Admin panel for managing waitlist.
    *   Automated email confirmations (e.g., sending a welcome email).
    *   Advanced analytics or tracking.

## 5. Stakeholders

*   User (Nelson)
*   Cline (AI Software Engineer)
