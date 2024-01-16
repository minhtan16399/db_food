import express from 'express';
import { getUser } from '../controllers/userControllers.js';

const userRoutes = express.Router();
userRoutes.use('/get-user', getUser)

export default userRoutes;