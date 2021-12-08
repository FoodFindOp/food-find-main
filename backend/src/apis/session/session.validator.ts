import {Schema} from "express-validator";

export const sessionValidator:Schema = {
    sessionSocketId: {
        isString: {
            errorMessage: "Please provide a valid session Socket Id"
        }
    },
}