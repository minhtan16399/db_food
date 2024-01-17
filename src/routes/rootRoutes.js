import express  from "express";
import userRoutes from "./userRoutes.js";
import restaurantRoutes from "./restaurantRoutes.js";
import orderRoutes from "./orderRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use('/user', userRoutes);
rootRoutes.use('/restaurant', restaurantRoutes);
rootRoutes.use('/orders', orderRoutes)

export default rootRoutes;
