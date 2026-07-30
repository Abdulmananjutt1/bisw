# BIWS — Begum Inayat Welfare Society

Professional Next.js website for **Begum Inayat Welfare Society (BIWS)**, a non-profit welfare organization.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide React** (icons)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── donate/
│   ├── programs/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/             # Header, Footer, Navbar
│   ├── sections/           # Reusable page sections (Hero, Stats, etc.)
│   └── ui/                 # Reusable UI components (Button, Card, Input)
├── config/
│   └── site.ts             # Site metadata, nav links, programs data
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── types/
    └── index.ts            # Shared TypeScript types
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route       | Description                    |
|-------------|--------------------------------|
| `/`         | Home page with hero, stats, programs preview |
| `/about`    | Mission, vision, and values    |
| `/programs` | Welfare programs listing       |
| `/donate`   | Donation information           |
| `/contact`  | Contact form and details       |

## Configuration

Edit `src/config/site.ts` to update:

- Organization name and description
- Contact information (email, phone, address)
- Social media links
- Navigation links
- Programs and stats data

## Contact Email (Resend)

The contact form sends submissions through the server-side `/api/contact` route. The browser never receives the Resend API key.

1. Copy `.env.example` to `.env.local`.
2. Add a Resend API key and configure a verified sender address.
3. Set `CONTACT_RECIPIENT_EMAIL` to the inbox that should receive contact inquiries.

```env
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=BIWS Website <contact@your-domain.com>
CONTACT_RECIPIENT_EMAIL=info@beguminayat.com
```

Restart `npm run dev` after changing environment variables. Email creation lives in `src/lib/email/`, validation in `src/lib/validation/`, and the HTTP endpoint in `src/app/api/contact/route.ts` so these pieces can be reused for future forms.

## License

Private — Begum Inayat Welfare Society
