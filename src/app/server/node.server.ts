import app from './main'
import { serveStatic } from '@hono/node-server/serve-static'
import { serve } from '@hono/node-server'

app.use('/*', serveStatic({ root: './wwwroot/' }));
app.use('/favicon.ico', serveStatic({ path: './wwwroot/favicon.ico'}));

const isProd = process.env["NODE_ENV"] === "Production";

if (isProd) {
    const port = 3000;
    console.log(`Server is running on port ${port}`);

    serve({
        fetch: app.fetch, 
        port
    });
}

export default app;