// Vercel API endpoint to serve configuration
export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'GET') {
        // Return configuration from environment variables
        res.status(200).json({
            APIFY_TOKEN: process.env.APIFY_TOKEN || '',
            WEBHOOK_URL: process.env.WEBHOOK_URL || '',
            APOLLO_ACTOR_ID: process.env.APOLLO_ACTOR_ID || 'bluecraftai~apollo-scraper',
            DEFAULT_SETTINGS: {
                maxLeads: 50000,
                defaultLeads: 100,
                timeout: 3600000
            },
            API: {
                baseUrl: 'https://api.apify.com/v2',
                timeout: 30000
            },
            SECURITY: {
                allowedOrigins: ['*'],
                rateLimitPerMinute: 10
            }
        });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
} 