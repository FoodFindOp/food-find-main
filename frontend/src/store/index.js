import profile from "./store"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({profile})

export const store = configureStore({reducer})
