import { Router } from 'express';
import {getRestaurantByRestaurantIdController} from './restaurant.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {check} from 'express-validator';

const router = Router();
router.route("/:restaurantId").get(  asyncValidatorController([
    check("restaurantId", "please provide a valid restaurantId").isUUID()
]), getRestaurantByRestaurantIdController)

export default router;