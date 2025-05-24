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
   - `APOLLO_ACTOR_ID` = `code_crafter~apollo-io-scraper`

### Step 5: Configure Webhook in Apify Console
1. Go to [Apify Console](https://console.apify.com)
2. Navigate to your Apollo actor
3. Go to **Settings** → **Webhooks**
4. Click **Add Webhook**
5. Configure:
   - **Event types**: `ACTOR.RUN.SUCCEEDED`
   - **Request URL**: Your webhook endpoint (e.g., n8n webhook URL)
   - **Payload template**:
   ```json
   {
       "metadata": {
           "success": true,
           "message": "Data automatically sent by Apify webhook",
           "totalRecords": {{resource.stats.itemCount}},
           "runId": "{{resource.id}}",
           "datasetId": "{{resource.defaultDatasetId}}",
           "timestamp": "{{createdAt}}",
           "automatedDelivery": true,
           "backgroundMonitor": false,
           "apifyWebhook": true,
           "runStartedAt": "{{resource.startedAt}}",
           "runFinishedAt": "{{resource.finishedAt}}",
           "runStatus": "{{resource.status}}",
           "actorId": "{{resource.actId}}",
           "userId": "{{resource.userId}}",
           "buildId": "{{resource.buildId}}",
           "exitCode": {{resource.exitCode}},
           "stats": {{resource.stats}}
       }
   }
   ```
   - **Headers template**:
   ```json
   {
       "Content-Type": "application/json",
       "User-Agent": "Apify-Native-Webhook/1.0",
       "X-Apollo-Scraper": "automated-delivery"
   }
   ```

### Step 6: Set Up Data Retrieval (n8n Example)
Since Apify webhooks only send metadata, you'll need to fetch the actual dataset items:

1. **Webhook node** receives the metadata
2. **HTTP Request node** fetches data using:
   ```
   https://api.apify.com/v2/datasets/{{ $json.body.metadata.datasetId }}/items?token=your_apify_token
   ```
3. Process and forward the complete data as needed

### Step 7: Add Custom Domain (Optional)
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
- ✅ Webhook configured at actor level (more reliable)

## 🔄 Future Updates:
Just push to GitHub - Vercel auto-deploys!

```bash
git add .
git commit -m "Update Apollo Scraper"
git push
```

## 📋 Important Notes:

### Webhook Data Flow:
1. **Apollo Scraper** runs and completes
2. **Apify webhook** sends metadata (including `datasetId`) to your endpoint
3. **Your webhook handler** uses the `datasetId` to fetch actual scraped data
4. **Complete data** (metadata + scraped items) is processed/forwarded

### Why This Approach:
- ✅ Apify webhooks don't include dataset items directly
- ✅ Metadata contains `datasetId` to fetch data separately
- ✅ More reliable than trying to include large datasets in webhook payload
- ✅ Follows Apify's recommended webhook patterns

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
- ✅ Proper webhook configuration
- ✅ No server management needed! 