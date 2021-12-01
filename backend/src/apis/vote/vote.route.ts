import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {check} from 'express-validator';

const router = Router();
router.route("/:voteId").get(  asyncValidatorController([
    check("voteId", "please provide a valid voteId").isUUID()
]),)

export default router;