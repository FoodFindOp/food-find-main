import {Schema} from "express-validator";

export const sessionValidator:Schema = {
    sessionId: {
        isUUID: {
            errorMessage: "Please provide a valid session Id"
        }
    },
}