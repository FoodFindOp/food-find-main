import { Router } from 'express';
import {getReviewByReviewIdController} from './review.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {check} from 'express-validator';
import {getReviewByReviewRestaurantId} from "./review.controller";

const ReviewRouter = Router();
ReviewRouter.route("/:reviewId").get(  asyncValidatorController([
    check("reviewId", "please provide a valid reviewId").isUUID()
]), getReviewByReviewIdController)

ReviewRouter.route('/review-restaurant/:reviewRestaurantId')
    .get( asyncValidatorController([check("reviewRestaurantId", "please provide a valid reviewRestaurantId").isUUID()]), getReviewByReviewRestaurantId)

export default ReviewRouter;