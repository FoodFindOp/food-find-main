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
