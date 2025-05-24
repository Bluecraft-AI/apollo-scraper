// Vercel API endpoint to serve configuration
const { CONFIG } = require('../config.js');

export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'GET') {
        // Return configuration (environment variables will be used in production)
        res.status(200).json({
            APIFY_TOKEN: CONFIG.APIFY_TOKEN,
            WEBHOOK_URL: CONFIG.WEBHOOK_URL,
            APOLLO_ACTOR_ID: CONFIG.APOLLO_ACTOR_ID,
            DEFAULT_SETTINGS: CONFIG.DEFAULT_SETTINGS,
            API: CONFIG.API,
            SECURITY: CONFIG.SECURITY
        });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
} 