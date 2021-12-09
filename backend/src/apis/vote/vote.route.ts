import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {check, checkSchema} from 'express-validator';
import {
    getAllVoteController,
    getVoteByPrimaryKey,
    getVoteByProfileId,
    getVoteByRestaurantId,
    getVoteBySessionId, postVote
} from "./vote.controller";
import {voteValidator} from "./vote.validator";
import {insertVote} from "../../utils/vote/insertVote";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {sessionValidator} from "../session/session.validator";
import {postSession} from "../session/session.controller";


export const VoteRoute = Router();

VoteRoute.route("/")
    .get(getAllVoteController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(voteValidator)),postVote)


VoteRoute.route("/primaryKey")
    .get(asyncValidatorController(checkSchema(voteValidator)),
        getVoteByPrimaryKey
    )


VoteRoute.route("/profileId/:profileId")
    .get(asyncValidatorController([check("profileId").isUUID()
    ]),
    getVoteByProfileId
    )

VoteRoute.route("/sessionId/:sessionId")
    .get(asyncValidatorController([check("sessionId").isUUID()
    ]),
        getVoteBySessionId
        )

VoteRoute.route("/restaurantId/:restaurantId")
    .get(asyncValidatorController([check("restaurantId").isUUID()
    ]),
        getVoteByRestaurantId
        )



