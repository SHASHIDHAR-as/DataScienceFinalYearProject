import express from 'express';

import {
  getRestaurant,getRestaurantsByLocation
} from '../../controllers/restaurants/restaurantController.js';

const router = express.Router();

// ROUTE 1: Get All the restaurants using: GET "/restaurants/traincomplaints/getallcomplaints". manager Login required

// ROUTE 2: Get a specific restaurant using: GET "/restaurants/restaurant_id".
router.get('/getrestaurant/:id', getRestaurant);
router.get('/getallrestaurant/:location', getRestaurantsByLocation);

export default router;