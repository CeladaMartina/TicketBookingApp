import express from 'express';
import { buyMovie, getMovie } from '../controller/movie.controller.js';
import { getCustomer } from '../controller/customer.controller.js';

const router=express.Router();

router.get("/movies", getMovie);
router.get("/customers", getCustomer);

router.post("/create-checkout-session", buyMovie);

export default router