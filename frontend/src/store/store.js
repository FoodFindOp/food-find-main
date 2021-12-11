import profile from "./profile"
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import auth from "./auth"

const reducer =  combineReducers({profile, auth})


export const store = configureStore({reducer})
