# Rumors

Marketing site for Rumors, a software studio. Next.js App Router, TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata, sitemap, and JSON-LD. No trailing slash. |
| `RESEND_API_KEY` | If set, the contact form sends email through [Resend](https://resend.com). If empty, submissions are logged on the server. |
| `RESEND_FROM_EMAIL` | From address, for example `Rumors <hello@yourdomain.com>`. |
| `CONTACT_TO_EMAIL` | Inbox that receives form messages. Required for email delivery. |

## Where to edit copy and company info

Company name, contact details, navigation, and page copy live in `lib/site.ts`.

The studio email is rumors.software@gmail.com. The address is Tirana, Albania. There is no phone number on the site.

Legal page text lives in `lib/legal.ts`.

The official marks are `public/logo-blue.png` on white surfaces and `public/logo-white.png` on the navy footer.

## Legal

The privacy, terms, and cookie pages are templates. They include an HTML comment stating that a lawyer must review them before publication. Do not treat them as legal advice. Have qualified counsel review the text for the jurisdictions where Rumors operates.

This site does not set non-essential cookies and does not show a consent banner. If you add analytics, keep them cookieless or update the cookie policy and add consent before any non-essential cookie is set.

## Deploy

Import the repository on Vercel. No extra build configuration is required. Set the environment variables above in the project settings, then deploy. `npm run build` is the production build.
