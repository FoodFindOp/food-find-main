import {Schema} from "express-validator";

export const voteValidator:Schema = {
    voteSessionId: {
        isUUID: {
            errorMessage: "Please provide a valid vote session Id"
        }
    },
}
