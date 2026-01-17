# Leverage Lab Website

Production-ready Next.js 13 marketing website for Leverage Lab consulting business.

## 🚀 Tech Stack

- **Framework:** Next.js 13 (Pages Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form
- **Email:** SendGrid API
- **Analytics:** Google Analytics 4
- **Deployment:** Vercel

## 📋 Prerequisites

- Node.js 18+ and npm
- SendGrid account (for contact form)
- Google Analytics 4 account (optional)
- Calendly account (for booking widget)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd leverage-lab-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` and replace the placeholder values:
   ```env
   SENDGRID_API_KEY=your_actual_sendgrid_api_key
   CONTACT_EMAIL=hello@leveragelab.co
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   CALENDLY_EMBED_URL=https://calendly.com/your-username/20min
   ```

## 🏃‍♂️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Build the production application:

```bash
npm run build
```

Test the production build locally:

```bash
npm start
```

## 🎨 Code Quality

Format code:
```bash
npm run format
```

Lint code:
```bash
npm run lint
```

## 📦 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables in project settings:
   - `SENDGRID_API_KEY`
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `CALENDLY_EMBED_URL`
5. Deploy!

### Important: Environment Variables in Vercel

After deploying, make sure to add all environment variables in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable with the appropriate values
4. Redeploy to apply changes

## 🔧 Configuration

### SendGrid Setup

1. Create a SendGrid account at [sendgrid.com](https://sendgrid.com)
2. Verify your sender email address
3. Create an API key with "Mail Send" permissions
4. Add the API key to your environment variables

### Google Analytics Setup

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (starts with `G-`)
3. Add it to `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable

### Calendly Setup

1. Create a Calendly account at [calendly.com](https://calendly.com)
2. Set up a 20-minute event type
3. Get the embed URL from the event settings
4. Add it to `CALENDLY_EMBED_URL` environment variable

## 📁 Project Structure

```
leverage-lab-site/
├── components/          # Reusable React components
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── CaseStudyCard.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── ContactForm.tsx
├── pages/              # Next.js pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── contact.tsx
│   ├── api/
│   │   └── contact.ts  # Contact form API endpoint
│   └── services/
│       ├── audit.tsx
│       └── starter.tsx
├── public/             # Static assets
│   ├── logo-*.svg
│   ├── robots.txt
│   └── sitemap.xml
├── styles/
│   └── globals.css     # Global styles and Tailwind
├── .env.example        # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🎨 Brand Colors

- **Teal:** `#18A8A8`
- **Aqua:** `#36D6C8`
- **Purple:** `#7B61FF`

Use the gradient: `linear-gradient(135deg, #18A8A8, #36D6C8, #7B61FF)`

## 📄 Pages

- `/` - Home page with hero, services, case studies
- `/services/audit` - Automation Audit service page
- `/services/starter` - Automation Starter service page
- `/contact` - Contact form and Calendly booking widget
- `/api/contact` - Serverless API for contact form submissions

## 🔍 SEO

- Meta tags configured for all pages
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data for LocalBusiness
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`

## 🚨 TODO Before Going Live

1. Replace placeholder values in `.env.local`:
   - [ ] Add real SendGrid API key
   - [ ] Set contact email address
   - [ ] Add GA4 Measurement ID
   - [ ] Set Calendly embed URL

2. Update `pages/_document.tsx`:
   - [ ] Replace `[ADDRESS_LINE1]` with real address
   - [ ] Replace `[ZIP]` with real ZIP code
   - [ ] Replace `[PHONE_NUMBER]` with real phone number

3. Add real assets:
   - [ ] Replace placeholder logo SVGs with actual brand logos
   - [ ] Add `favicon.ico` to `/public`
   - [ ] Add `og-image.png` for social sharing (1200x630px)

4. Domain setup:
   - [ ] Point domain `leveragelab.co` to Vercel
   - [ ] Configure SSL certificate (automatic in Vercel)

## 📞 Support

For questions or issues with the codebase, please open an issue in the repository.

## 📝 License

Copyright © 2026 Leverage Lab. All rights reserved.
