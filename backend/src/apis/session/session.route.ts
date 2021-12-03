import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {insertSession} from "../../utils/session/insertSession";
import {check} from 'express-validator';

export const sessionRouter = Router();
sessionRouter.route("/:sessionId").get(  asyncValidatorController([
    check("sessionId", "please provide a valid sessionId").isUUID()
]),)