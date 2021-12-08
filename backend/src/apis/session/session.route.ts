import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {insertSession} from "../../utils/session/insertSession";
import {check, checkSchema} from 'express-validator';
import {
    getAllSession,
    getSessionBySessionId,
    getSessionBySessionProfileId,
    getSessionBySessionSocketId,
    postSession
} from "./session.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {sessionValidator} from "./session.validator";




export const SessionRouter = Router();
SessionRouter.route("/:sessionId").get(asyncValidatorController([
    check("sessionId", "please provide a valid sessionId").isUUID()
]),
    getSessionBySessionId
    )
SessionRouter.route("/sessionProfileId/:sessionProfileId").get(isLoggedIn, getSessionBySessionProfileId)
SessionRouter.route("/sessionSocketId/:sessionSocketId").get(isLoggedIn, asyncValidatorController(checkSchema(sessionValidator)), getSessionBySessionSocketId)
SessionRouter.route("/")
    .get(getAllSession)
    .post(isLoggedIn, asyncValidatorController(checkSchema(sessionValidator)),postSession)



