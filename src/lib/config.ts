// Application configuration
// Change VITE_APP_URL in Vercel environment variables after deployment

export const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.spinka.studio'

// Helper to build app URLs
export const appUrl = (path: string) => `${APP_URL}${path}`
