import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../ui/shared/utils/httpConfig'

const slice = createSlice({
  name: "random restaurant",
  initialState: [],
  reducers: {
    setRandomRestaurants: (restaurants, action) => {
      return action.payload
    },
    getRestaurantByRestaurantId: (restaurants, action) => {
      restaurants.push(action.payload)
    },
    moveToNextRestaurant: (restaurants, action) => {
      restaurants.shift()
    }
  }
})

export const {setRandomRestaurants, moveToNextRestaurant} = slice.actions


export const fetchRandomRestaurants = () => async dispatch => {
  const {data} = await httpConfig(`/apis/restaurant/`);
  dispatch(setRandomRestaurants(data))
}

export default slice.reducer