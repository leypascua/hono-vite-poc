import { Hono } from 'hono';
import publicApp from './web-public/app';

const app = new Hono();

app.route('/', publicApp);

export default app;