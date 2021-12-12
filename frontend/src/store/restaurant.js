import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../ui/shared/utils/httpConfig'

const slice = createSlice({
  name: "restaurants",
  initialState: [],
  reducers: {
    getAllRestaurants: (restaurants, action) => {
      return action.payload
    },
    getRestaurantByRestaurantId: (restaurants, action) => {
      restaurants.push(action.payload)
    }
  }
})

export const {getAllRestaurants, getRestaurantByRestaurantId} = slice.actions

export const fetchAllRestaurants = () => async dispatch => {
  const {data} = await httpConfig(`/apis/restaurant/`);
  dispatch(getAllRestaurants(data))
}

export const fetchRestaurantByRestaurantId = (id) => async dispatch => {
  const {data} = await httpConfig(`/apis/restaurant/${id}`);
  dispatch(getRestaurantByRestaurantId(data))
}

export default slice.reducer