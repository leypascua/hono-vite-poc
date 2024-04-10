import { Hono } from 'hono';

const controller = new Hono();

controller.get('/', (c) => {
    return c.text('Hello from /secure/signin');
});

export default controller;