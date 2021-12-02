import {Schema} from "express-validator";

export const profileValidator : Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'please provide a valid userProfileId'
        }
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileName must be between eight and thirty two characters',
            options: { min:8, max: 32 }
        }
    }
};