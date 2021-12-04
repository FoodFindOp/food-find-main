import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {check} from 'express-validator';
import {getAllVoteController, getVoteByVoteProfileId, getVoteByVoteRestaurantId, getVoteByVoteSessionId } from "./vote.controller";


export const VoteRoute = Router();

VoteRoute.route("/")
    .get(getAllVoteController)

VoteRoute.route("/profileId/:profileId")
    .get(asyncValidatorController([check("profileId").isUUID()
    ]),
    getVoteByVoteProfileId
    )

VoteRoute.route("/sessionId/:essionId")
    .get(asyncValidatorController([check("sessionId").isUUID()
    ]),
        getVoteByVoteSessionId
        )

VoteRoute.route("/restaurantId/:restaurantId")
    .get(asyncValidatorController([check("restaurantId").isUUID()
    ]),
        getVoteByVoteRestaurantId
        )
