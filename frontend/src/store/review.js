import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../ui/shared/utils/httpConfig'

const slice = createSlice({
  name: "reviews",
  initialState: [],
  reducers: {
    getAllReviews: (reviews, action) => {
      return action.payload
    },
    getReviewByReviewRestaurantId: (posts, action) => {
      return action.payload
    }
  }
})

export const {getAllReviews, getReviewByReviewRestaurantId} = slice.actions

export const fetchAllReviews = () => async dispatch => {
  const {data} = await httpConfig(`/apis/review`);
  dispatch(getAllReviews(data))
}

export const fetchReviewByReviewRestaurantId = (id) => async dispatch => {
  const {data} = await httpConfig(`/apis/review/review-restaurant/${id}`);
  dispatch(getReviewByReviewRestaurantId(data))
}

export default slice.reducer