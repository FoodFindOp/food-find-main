import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {check} from 'express-validator';
import {
    getAllVoteController,
    getVoteByPrimaryKey,
    getVoteByVoteProfileId,
    getVoteByVoteRestaurantId,
    getVoteByVoteSessionId
} from "./vote.controller";


export const VoteRoute = Router();

VoteRoute.route("/")
    .get(getAllVoteController)

VoteRoute.route("/")
    .get(asyncValidatorController([check("changing this").isUUID()
        ]),
        getVoteByPrimaryKey
    )


VoteRoute.route("/profileId/:profileId")
    .get(asyncValidatorController([check("profileId").isUUID()
    ]),
    getVoteByVoteProfileId
    )

VoteRoute.route("/sessionId/:sessionId")
    .get(asyncValidatorController([check("sessionId").isUUID()
    ]),
        getVoteByVoteSessionId
        )

VoteRoute.route("/restaurantId/:restaurantId")
    .get(asyncValidatorController([check("restaurantId").isUUID()
    ]),
        getVoteByVoteRestaurantId
        )
