import { Router } from 'express';
import {getRestaurantByRestaurantIdController} from './restaurant.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';

const router = Router();
router.route("/:tweetId").get(  asyncValidatorController([
    check("tweetId", "please provide a valid tweetId").isUUID()
]), getRestaurantByRestaurantIdController)

export default router;