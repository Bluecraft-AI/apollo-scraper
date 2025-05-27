# 🚀 Apollo Lead Scraper - Vercel Deployment

This repository serves as the main hub for the Apollo Lead Scraper with automated webhook delivery, hosted at [data.bluecraftleads.com](https://data.bluecraftleads.com).

**What this does:** Automatically gets contact information (leads) from Apollo.io and delivers them via webhook. Fully automated with native Apify integration!

## 🎯 What You Get
- **Up to 50,000 leads automatically** from any Apollo search
- **No background monitoring needed** - Apify handles everything
- **Delivered automatically** via native webhook when complete
- **One-click operation** - just paste and click!
- **Serverless deployment** - works on Vercel without any servers

---

## 📋 Environment Variables Required

### Required Variables:
```
APIFY_TOKEN=your_apify_token_here
APOLLO_ACTOR_ID=code_crafter/apollo-io-scraper
```

### Optional Variables:
```
# No longer needed - webhook configured in Apify Console
# WEBHOOK_URL=removed (use native webhook integration)
```

---

## 🎯 Setup Instructions

### Step 1: Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set the required environment variables in Vercel dashboard
3. Deploy the application

### Step 2: Configure Native Webhook in Apify
1. Go to https://console.apify.com/actors
2. Find `code_crafter/apollo-io-scraper` actor
3. Click "Webhooks" tab
4. Add webhook with event `ACTOR.RUN.SUCCEEDED`
5. Configure your webhook URL and payload template

### Step 3: Use the Application
1. Visit your Vercel deployment URL
2. Paste your Apollo search URL
3. Click "Start Automated Workflow"
4. Data will be delivered to your webhook automatically!

---

## 🎯 How It Works

1. **Submit Apollo URL** through the web form
2. **Apify actor starts** automatically via API
3. **Native webhook delivers data** when scraping completes
4. **No background monitoring needed** - all handled by Apify

---

## ✅ Benefits of Native Integration

- **More Reliable** - Apify handles retries and delivery
- **Simpler Setup** - No webhook URL environment variable needed
- **Better Performance** - No custom background monitoring
- **Easier Management** - Configure once in Apify Console
- **Serverless Compatible** - Works perfectly on Vercel

---

## 🛠️ Technical Details

**Frontend:** Static HTML/JS served by Vercel
**Backend:** Serverless API endpoints for configuration
**Scraping:** Apify actor `code_crafter/apollo-io-scraper`
**Delivery:** Native Apify webhook integration
**Hosting:** Vercel serverless platform

---

## 🎉 That's It!

**You now have a fully automated, serverless lead generation system!**

1. **Deploy:** Push to GitHub, deploy on Vercel
2. **Configure:** Set environment variables and webhook
3. **Use:** Submit Apollo URLs and get leads automatically
4. **Scale:** Handle thousands of leads without any infrastructure!

**No servers, no monitoring, just results!** 🚀 
