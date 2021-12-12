import profile from "./profile"
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import auth from "./auth"
import restaurant from './restaurant'
import reviews from './review'
import swipeRestaurants from './swipeRestaurants'

const reducer =  combineReducers({profile, auth, restaurant, reviews, swipeRestaurants})


export const store = configureStore({reducer})
