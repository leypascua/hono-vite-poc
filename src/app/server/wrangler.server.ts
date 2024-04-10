import app from './main'
import { serveStatic } from 'hono/cloudflare-workers'

// @ts-ignore
import manifest from '__STATIC_CONTENT_MANIFEST'
import { cache } from 'hono/cache';

app.get(
    '/*', 
    cache({
        cacheName: 'web-public-assets',
        cacheControl: 'max-age=86400'
    }),
    serveStatic({ root: './', manifest })
);

//app.get('/favicon.ico', serveStatic({ path: './wwwroot/favicon.ico', manifest }));

export default {
    fetch: app.fetch
    //queue: async (batch, env) => {}
    //scheduled: async (batch, env) => {}
}
