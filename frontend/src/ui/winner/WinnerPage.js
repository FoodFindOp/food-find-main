import React, { useEffect } from 'react'
import { Container, Row, Col, Image, Card, Stack } from 'react-bootstrap'
import pandaPic from '../images/panda.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviewByReviewRestaurantId } from '../../store/review'
import { fetchRestaurantByRestaurantId } from '../../store/restaurant'
import { WinnerCard } from '../shared/WinnerCard'
import review from '../../store/review'

export const WinnerPage = ({match}) => {

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
console.log(reviews)
  return (

    <>

      {/*Restaurant Name*/}

      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col>
            {restaurant&& <h1 className="px-2 pb-1 my-5 text-white bg-dark bg-opacity-50 rounded-3">{restaurant.restaurantName}</h1>}
          </Col>
        </Row>
      </Container>

      {/*Info*/}

      <Container>
        <Row>
          <Col className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-75 rounded-3">
            {restaurant&& <Image src={restaurant.restaurantImage} fluid alt="food"/>}
          </Col>


          <Col className="bg-dark bg-opacity-75 rounded-3 d-flex flex-column justify-content-center py-5 py-md-0">
            {restaurant&& <h3 className="d-flex justify-content-center text-white">Average Star Rating: {restaurant.restaurantStarRating}</h3>}
            {restaurant&& <h3 className="d-flex justify-content-center my-5 text-white">{restaurant.restaurantAddress}</h3>}
            {restaurant&& <h3 className="d-flex justify-content-center text-white">{restaurant.restaurantPhone}</h3>}
          </Col>
        </Row>
      </Container>

      <Container className="d-flex justify-content-evenly">
        <Row>
            {reviews.map(review => <WinnerCard key={review.reviewId} review={review}/>)}
        </Row>
      </Container>


    </>
  )
}