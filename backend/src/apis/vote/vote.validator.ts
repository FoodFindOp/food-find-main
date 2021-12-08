import {Schema} from "express-validator";

export const voteValidator:Schema = {
    voteSessionId: {
        isUUID: {
            errorMessage: "Please provide a valid vote session Id"
        }
    },
    voteRestaurantId: {
        isUUID: {
            errorMessage: "Please provide a valid restaurant"
        }
    },
    voteProfileId: {
        isUUID: {
            errorMessage: "Please provide a valid profileId"
        }
    },
    voteLiked: {
        isBoolean: {errorMessage: "Please provide a boolean"
        },
        optional: {
            options:{
                nullable: true
            }
        }
    }
}
