import {Schema} from "express-validator";

export const sessionValidator:Schema = {
    sessionId: {
        isString: {
            errorMessage: "Please provide a valid sessionId"
        }
    },
}