import express from 'express';
import { getLike, getLikeByUser, getOrder, getRate, getRateByUser, getUser } from '../controllers/userControllers.js';

const userRoutes = express.Router();

userRoutes.get('/information', getUser); // get information of user
userRoutes.get('/get-like', getLike); // get list like of all user
userRoutes.get('/get-rate', getRate); // get rate of all user
userRoutes.get('/get-like-by-user', getLikeByUser) // get list like of one user
userRoutes.get('/get-rate-by-user', getRateByUser) // get list rate of one user
userRoutes.get('/get-order', getOrder)

export default userRoutes;