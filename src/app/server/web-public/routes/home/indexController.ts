import { Hono } from 'hono'
import IndexView  from './indexView';

const controller = new Hono();

controller.get('/', (c) => {    
    return c.render(IndexView());
});

export default controller;