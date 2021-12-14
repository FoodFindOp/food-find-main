import profile from "./profile"
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import auth from "./auth"
import restaurant from './restaurant'
import reviews from './review'
import swipeRestaurants from './swipeRestaurants'
import votes from './vote'

const reducer =  combineReducers({profile, auth, restaurant, reviews, swipeRestaurants, votes})


export const store = configureStore({reducer})
