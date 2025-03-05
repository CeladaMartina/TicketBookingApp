import express from 'express';
import { getMovie } from '../controller/movie.controller.js';
import { getCustomer } from '../controller/customer.controller.js';

const router=express.Router();

router.get("/movies", getMovie);
router.get("/customers", getCustomer);

export default router