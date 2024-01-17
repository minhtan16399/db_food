import express from 'express';
import { addOrder, getOrder } from '../controllers/orderControllers.js';

const orderRoutes = express.Router();

orderRoutes.get('/list-order', getOrder);
orderRoutes.post('/add-order', addOrder); // add new order by user

export default orderRoutes;