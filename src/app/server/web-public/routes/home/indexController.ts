import { Hono } from 'hono'
import IndexView  from './indexView';

const controller = new Hono();

controller.get('/', (c) => {    
    return c.render(IndexView());
});

controller.get('/about', (c) => {
    return c.text('This is the about page.');
});

export default controller;