/**
 * 🔧 CENTRALIZED CONFIGURATION
 * 
 * Edit these values once and they'll be used throughout the entire project
 */

const CONFIG = {
    // 🔑 Your Apify API Token
    // Get this from: https://console.apify.com/account#/integrations
    // Set as environment variable: APIFY_TOKEN
    APIFY_TOKEN: process.env.APIFY_TOKEN || '',
    
    // 🔗 Your Webhook URL
    // This is where the scraped Apollo data will be sent
    // Set as environment variable: WEBHOOK_URL
    WEBHOOK_URL: process.env.WEBHOOK_URL || '',
    
    // 🎯 Apollo Actor Configuration
    APOLLO_ACTOR_ID: process.env.APOLLO_ACTOR_ID || 'code_crafter~apollo-io-scraper',
    
    // 📊 Default Settings
    DEFAULT_SETTINGS: {
        maxLeads: 50000,
        defaultLeads: 100,
        defaultFileName: 'Apollo Prospects',
        cleanOutput: false
    },
    
    // 🚀 API Configuration
    API: {
        baseUrl: 'https://api.apify.com/v2',
        timeout: 30000, // 30 seconds
        retries: 3
    },
    
    // 🔒 Security Settings
    SECURITY: {
        allowedDomains: ['app.apollo.io'], // Only allow Apollo URLs
        validateWebhook: true,
        requireHttps: true // Require HTTPS for webhook URLs
    },
    
    // 📝 Logging
    LOGGING: {
        enabled: true,
        level: 'info', // 'debug', 'info', 'warn', 'error'
        saveToFile: true
    }
};

// 🛡️ Validation Functions
function validateConfig() {
    const errors = [];
    
    // Check API Token
    if (!CONFIG.APIFY_TOKEN) {
        errors.push('❌ APIFY_TOKEN environment variable is required. Please set your Apify API token.');
    }
    
    // Check Webhook URL
    if (!CONFIG.WEBHOOK_URL) {
        errors.push('❌ WEBHOOK_URL environment variable is required. Please set your webhook endpoint.');
    }
    
    // Validate webhook URL format
    if (CONFIG.WEBHOOK_URL) {
        try {
            const url = new URL(CONFIG.WEBHOOK_URL);
            if (CONFIG.SECURITY.requireHttps && url.protocol !== 'https:') {
                errors.push('❌ WEBHOOK_URL must use HTTPS for security.');
            }
        } catch (error) {
            errors.push('❌ WEBHOOK_URL is not a valid URL format.');
        }
    }
    
    return errors;
}

// 🔧 Helper Functions
function getApiUrl(endpoint) {
    return `${CONFIG.API.baseUrl}${endpoint}`;
}

function getActorRunUrl() {
    return getApiUrl(`/acts/${CONFIG.APOLLO_ACTOR_ID}/runs?token=${CONFIG.APIFY_TOKEN}`);
}

function getRunStatusUrl(runId) {
    return getApiUrl(`/actor-runs/${runId}?token=${CONFIG.APIFY_TOKEN}`);
}

function getDatasetUrl(datasetId) {
    return getApiUrl(`/datasets/${datasetId}/items?token=${CONFIG.APIFY_TOKEN}`);
}

// 📊 Status Check
function getConfigStatus() {
    const errors = validateConfig();
    const isConfigured = errors.length === 0;
    
    return {
        isConfigured,
        errors,
        settings: {
            hasApiToken: CONFIG.APIFY_TOKEN !== '',
            hasWebhookUrl: CONFIG.WEBHOOK_URL !== '',
            actorId: CONFIG.APOLLO_ACTOR_ID,
            webhookUrl: CONFIG.WEBHOOK_URL,
            apiBaseUrl: CONFIG.API.baseUrl
        }
    };
}

// 🌐 Browser/Node.js Compatibility
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        CONFIG,
        validateConfig,
        getApiUrl,
        getActorRunUrl,
        getRunStatusUrl,
        getDatasetUrl,
        getConfigStatus
    };
} else {
    // Browser environment
    window.AppConfig = {
        CONFIG,
        validateConfig,
        getApiUrl,
        getActorRunUrl,
        getRunStatusUrl,
        getDatasetUrl,
        getConfigStatus
    };
} 