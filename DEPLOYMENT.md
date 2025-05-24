# 🚀 Apollo Scraper - Web Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Step 1: Prepare Your Code
✅ Your code is now ready for deployment with environment variables!

### Step 2: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Prepare Apollo Scraper for web deployment"

# Add your GitHub repository
git remote add origin https://github.com/yourusername/apollo-scraper.git

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect it's a Node.js app

### Step 4: Set Environment Variables
In Vercel dashboard:
1. Go to your project → Settings → Environment Variables
2. Add these variables:
   - `APIFY_TOKEN` = `your_apify_token_here`
   - `WEBHOOK_URL` = `your_webhook_url_here`
   - `APOLLO_ACTOR_ID` = `code_crafter~apollo-io-scraper`

### Step 5: Add Custom Domain
1. In Vercel dashboard → Domains
2. Add your custom domain (e.g., `apollo.yourdomain.com`)
3. Follow DNS setup instructions

## 🎯 Your App Will Be Live At:
- **Vercel URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: `https://apollo.yourdomain.com`

## 🔒 Security Benefits:
- ✅ API keys are secure (not in code)
- ✅ HTTPS enabled automatically
- ✅ Environment variables encrypted
- ✅ Auto-deployments from GitHub

## 🔄 Future Updates:
Just push to GitHub - Vercel auto-deploys!

```bash
git add .
git commit -m "Update Apollo Scraper"
git push
```

## Alternative Platforms:

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `./`
4. Add environment variables in Netlify dashboard

### Railway
1. Connect GitHub repo
2. Add environment variables
3. Deploy automatically

### Heroku
1. Create Heroku app
2. Connect GitHub repo
3. Add environment variables in Config Vars
4. Enable automatic deploys

---

## 🎉 That's It!
Your Apollo Scraper will be live on the web with:
- ✅ Custom domain
- ✅ Secure API keys
- ✅ Auto-deployments
- ✅ No server management needed! 