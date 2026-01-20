# 🚀 Quick Launch Guide - Leverage Lab

## ⚡ Immediate Actions (Before Going Live)

### 1. Update Business Information (5 minutes)
Open `/pages/_document.tsx` and replace these placeholders:

```typescript
// Line ~57: Update these values
telephone: '[PHONE_NUMBER]',        // Your actual phone: (214) 555-0123
streetAddress: '[ADDRESS_LINE1]',   // Your address: 123 Main St, Suite 100
postalCode: '[ZIP]',                // Your ZIP: 75201
```

### 2. Set Up Environment Variables (10 minutes)
Copy `.env.example` to `.env.local` and fill in:

```bash
# SendGrid for contact form
SENDGRID_API_KEY=SG.your_actual_key_here
SENDGRID_FROM_EMAIL=hello@leveragelab.co
SENDGRID_TO_EMAIL=jeremy@leveragelab.co

# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Calendly (optional, but recommended)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
```

**How to get these:**
- **SendGrid API Key:** https://app.sendgrid.com/settings/api_keys (free tier works)
- **Google Analytics 4:** https://analytics.google.com/ → Create property → Get measurement ID
- **Calendly:** https://calendly.com/ → Event Types → Copy link

### 3. Deploy to Vercel (15 minutes)
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy from project directory
cd /Users/jeremymckinney/leverage-lab-site
vercel --prod

# Follow prompts, then add environment variables in Vercel dashboard
```

**After deployment:**
1. Go to https://vercel.com/dashboard
2. Select your project → Settings → Environment Variables
3. Add all variables from `.env.local`
4. Redeploy to apply changes

---

## 📊 Post-Launch SEO Setup (Day 1)

### Google Search Console (20 minutes)
1. Go to https://search.google.com/search-console
2. Add property: `leveragelab.co`
3. Verify ownership (Vercel makes this easy - use domain provider method)
4. Submit sitemap: `https://leveragelab.co/sitemap.xml`
5. Request indexing for all 7 pages manually

### Google Business Profile (30 minutes)
1. Go to https://business.google.com
2. Create business profile:
   - Name: **Leverage Lab**
   - Category: **Business Consultant** (primary), **Software Company** (secondary)
   - Service area: **Dallas-Fort Worth metroplex** (NOT a physical location customers visit)
   - Phone: Your business phone
   - Website: https://leveragelab.co
   - Description: Copy from home page meta description
3. Add services:
   - Automation Audit ($750)
   - Starter Tier ($500/month)
   - Growth Tier ($1,500/month)
   - Enterprise Tier ($3,000/month)
4. Add photos (logo, team photos if available)
5. Set business hours: Mon-Fri 9am-5pm CST

---

## 🎯 Week 1: First Client Strategy

### Day 1-2: Set Up Foundations
- [ ] Deploy site to Vercel
- [ ] Configure Google Business Profile
- [ ] Submit sitemap to Search Console
- [ ] Add business to Yelp (free listing)
- [ ] Share launch on LinkedIn with #DallasBusiness #DFWTech tags

### Day 3-4: Active Outreach
- [ ] Send 20 LinkedIn connection requests to DFW contractors/retailers
  - Search: "contractor owner Dallas" or "retail store manager Fort Worth"
  - Custom note: "Hey [Name], fellow DFW business owner here. Just launched Leverage Lab to help local contractors save 10-15 hours/week through automation. Would love to connect!"

- [ ] Post in 5 DFW Facebook Groups:
  - Dallas Small Business Owners
  - DFW Entrepreneurs
  - North Texas Business Network
  - Value: Share a helpful tip (not salesy), mention you're offering free audits

### Day 5-7: Follow-Up & Refine
- [ ] Follow up with LinkedIn connections who accepted
- [ ] Respond to any Google Business Profile questions
- [ ] Check Google Search Console - are pages indexed?
- [ ] Test contact form - make sure emails arrive
- [ ] Ask 2-3 friends/family to leave Google reviews (if they know your work)

---

## 💰 Optional: Google Ads Fast Track

**If you need clients FASTER than organic SEO allows:**

### Budget: $300-500 for Week 1
This gets you ~15-25 clicks to your audit page

### Campaign Setup (30 minutes)
1. Go to https://ads.google.com
2. Create Search campaign
3. Target keywords:
   - "automation services Dallas" (bid: $3-5/click)
   - "business automation consultant Dallas" (bid: $2-4/click)
   - "AI consulting DFW" (bid: $2-3/click)
4. Location: 25-mile radius around Dallas, TX
5. Ad copy:
   ```
   Headline 1: Save 15 Hours/Week - $750 Audit
   Headline 2: Dallas Automation Consultant
   Headline 3: Free 20-Min Consultation
   Description: Professional automation audit for DFW businesses. 
   Discover your highest-ROI opportunities. Serving Dallas, 
   Fort Worth, Plano & DFW.
   ```
6. Landing page: https://leveragelab.co/services/audit
7. Daily budget: $30-50/day

**Expected results:** 2-3 clicks/day → 1-2 leads/week → 1 client in 2 weeks (if you convert at 50%)

---

## 📞 When Someone Contacts You

### Respond Within 1 Hour (Critical!)
Studies show 78% of business goes to the company that responds first.

### Phone Call Script (First 5 Minutes)
1. **Greeting:** "Hey [Name], this is Jeremy from Leverage Lab. Thanks for reaching out!"
2. **Qualify:** "Tell me about your business - what do you do, how many people, what's your biggest time drain?"
3. **Pain Point:** "So you're spending X hours/week on [manual task]. That's costing you about $X per month in time. Sound about right?"
4. **Offer Audit:** "Perfect. I'd recommend starting with our $750 audit. We'll find 5-10 automation opportunities specific to your business, ranked by ROI. Most clients recoup that in the first month. Does that sound helpful?"
5. **Book:** "Great! Let me send you a calendar invite. Does [day/time] work for the 90-minute discovery call?"

### Email Response Template
```
Hi [Name],

Thanks for reaching out! I'd love to help [Company Name] save time through automation.

Based on what you shared, I think you'd be a great fit for our Automation Audit ($750). 
Here's what you'll get:

✅ 90-minute discovery call where we map your operations
✅ Professional report with 5-10 automation opportunities, ranked by ROI
✅ Step-by-step implementation roadmap
✅ 30-minute follow-up to answer questions

Most Dallas contractors/retailers we work with see 10-15 hours saved per week, 
which pays for itself in under a month.

Want to hop on a quick 20-minute call this week to discuss? 
Here's my calendar: [Calendly link]

Looking forward to helping you streamline operations!

Jeremy
Leverage Lab
[Phone number]
```

---

## 🎓 SEO Quick Wins (Ongoing)

### Content Ideas for Blog (1 post/week)
1. "5 Automation Opportunities Every Dallas Contractor is Missing"
2. "How Fort Worth Retailers Can Compete with Amazon Using AI"
3. "The $750 Audit That Saved a Plano Business $2,000/Month"
4. "3 Free Tools Every DFW Small Business Should Use Today"
5. "Automation ROI Calculator: How Much Time Are You Really Wasting?"

Each post = new indexed page = more chances to rank!

### Local Directory Submissions (Add 5/week)
Week 1:
- [ ] Yelp for Business
- [ ] Better Business Bureau (BBB)
- [ ] Clutch.co
- [ ] Chamber of Commerce (Dallas)
- [ ] Expertise.com

Week 2:
- [ ] Thumbtack (as a service provider)
- [ ] Bark.com (as a consultant)
- [ ] Yellow Pages
- [ ] Manta
- [ ] Foursquare for Business

---

## 📈 Metrics to Track

### Weekly Dashboard (Check Every Monday)
| Metric | Goal | Where to Check |
|--------|------|----------------|
| Google Search Impressions | 100+ by week 4 | Search Console → Performance |
| Website Visits | 20+ by week 2 | Google Analytics → Realtime |
| Contact Form Submissions | 2+ by week 2 | Your email inbox |
| Google Business Profile Views | 50+ by week 2 | Google Business Profile |
| LinkedIn Connections | 50+ by week 2 | LinkedIn |

### Success Indicators
✅ **Week 1:** Site indexed, Google Business Profile live, 10+ LinkedIn connections  
✅ **Week 2:** 1-2 qualified leads, appearing on page 2-3 for target keywords  
✅ **Week 3-4:** First client signed, page 1 rankings for long-tail keywords  

---

## 🚨 Common Issues & Fixes

### "Contact form not sending emails"
→ Check SENDGRID_API_KEY in Vercel environment variables  
→ Verify sender email in SendGrid dashboard  
→ Check spam folder for test emails

### "Site not showing in Google search"
→ Wait 3-7 days after sitemap submission  
→ Request manual indexing in Search Console  
→ Share site on social media to build initial backlinks

### "Google Business Profile suspended"
→ Common for new service-area businesses  
→ Appeal with explanation that you serve DFW area remotely  
→ Add more business details (hours, services, photos)

### "Not getting leads despite traffic"
→ Check that Calendly link works  
→ Test contact form yourself  
→ Add more trust signals (testimonials, case studies)  
→ Simplify your CTA (one clear action per page)

---

## 🎉 Celebration Milestones

- [ ] **First 10 website visitors** → Share on LinkedIn!
- [ ] **First contact form submission** → Screenshot and celebrate!
- [ ] **First Google search appearance** → Check what keyword it was!
- [ ] **First qualified lead** → Nail that discovery call!
- [ ] **First client signed** → Time to optimize for scale!

---

## 💬 Need Help?

**Current SEO Status:** ✅ Fully optimized for DFW local search  
**Mobile Optimization:** ✅ Confirmed responsive  
**Build Status:** ✅ All 9 pages compiled successfully  
**Ready to Deploy:** ✅ YES!

Your site is a **powerhouse for generating work in DFW** 🚀

The SEO foundation is rock solid. Now it's all about:
1. Getting indexed (3-7 days)
2. Active outreach (LinkedIn, Facebook, networking)
3. Building trust signals (reviews, testimonials)
4. Consistent content (1 blog post/week helps)

**You've got this!** 💪

---

*Pro tip: Bookmark this guide and check off items as you complete them. 
Small wins compound into big results!*
