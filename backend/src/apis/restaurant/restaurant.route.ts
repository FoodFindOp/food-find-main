import { Router } from 'express';
import {getRestaurantByRestaurantIdController} from './restaurant.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {getRandomRestaurant} from "./restaurant.controller";
import {check} from 'express-validator';

const RestaurantRouter = Router();
RestaurantRouter.route("/:restaurantId").get(  asyncValidatorController([
    check("restaurantId", "please provide a valid restaurantId").isUUID()
]), getRestaurantByRestaurantIdController)

RestaurantRouter.route('/')
    .get(getRandomRestaurant)

export default RestaurantRouter;