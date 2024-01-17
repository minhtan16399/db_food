import express from 'express';
import { getLike, getLikeByRestaurant, getRate, getRateByRestaurant, getRestaurant } from '../controllers/restaurantControllers.js';

const restaurantRoutes = express.Router();

restaurantRoutes.get('/information', getRestaurant); // get information of restaurant
restaurantRoutes.get('/get-like', getLike); // get list like of all restaurant
restaurantRoutes.get('/get-rate', getRate); // get rate of all restaurant
restaurantRoutes.get('/get-like-by-restaurant', getLikeByRestaurant) // get list like of one restaurant
restaurantRoutes.get('/get-rate-by-restaurant', getRateByRestaurant) // get list rate of one restaurant

export default restaurantRoutes;