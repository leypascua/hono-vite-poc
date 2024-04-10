import { Hono } from 'hono';
import publicApp from './web-public/app';

const app = new Hono();

app.route('/p', publicApp);

app.get('/', (c) => {
    return c.redirect('/p');
})

export default app;