import { Router } from 'express';
import {getReviewByReviewIdController} from './review.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {check} from 'express-validator';

const router = Router();
router.route("/:reviewId").get(  asyncValidatorController([
    check("reviewId", "please provide a valid reviewId").isUUID()
]), getReviewByReviewIdController)

export default router;