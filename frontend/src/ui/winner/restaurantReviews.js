import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { fetchReviewByReviewRestaurantId } from '../../store/review'
import { fetchRestaurantByRestaurantId } from '../../store/restaurant'


export const RestaurantReviews = ({match}) => {

  const dispatch = useDispatch();

  const sideEffects = () => {
    dispatch(fetchReviewByReviewRestaurantId(match.params.restaurantId));
    dispatch(fetchRestaurantByRestaurantId(match.params.restaurantId));
  };
  useEffect(sideEffects,  [match.params.restaurantId, dispatch]);

  const reviews = useSelector(state => (
    state.reviews
      ? state.reviews.filter(post => post.reviewRestaurantId === match.params.restaurantId)
      : []
  ));
  const restaurant = useSelector(state => (
    state.restaurant
      ? state.restaurant[0]
      : null
  ));

  return (
    <>
      <main className="container">
        {restaurant && (<h2>{restaurant.name}</h2>)}
        <div className="card-group card-columns">
          {
            reviews.map(review => <RestaurantReviews key={review.reviewId} review={review}/>)
          }
        </div>
      </main>
    </>
  )
};