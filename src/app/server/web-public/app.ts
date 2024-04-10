import { Hono } from 'hono';
import homeIndexController from './routes/home/indexController';
import secureSignInController from './routes/secure/signInController';

const app = new Hono();

app.route('/', homeIndexController);
app.route('/secure/signin', secureSignInController);

export default app;