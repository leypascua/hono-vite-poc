import app from './main'
import { serveStatic } from 'hono/cloudflare-workers'

// @ts-ignore
import manifest from '__STATIC_CONTENT_MANIFEST'

app.get('/*', serveStatic({ root: './wwwroot/', manifest }));
app.get('/favicon.ico', serveStatic({ path: './wwwroot/favicon.ico', manifest }));

export default app;