import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchRandomRestaurants, moveToNextRestaurant } from '../../store/swipeRestaurants'
import { httpConfig } from '../shared/utils/httpConfig'
import { setVote } from '../../store/vote'
import { useHistory } from 'react-router-dom'


export const SwiperPage = ({match}) => {

  const dispatch = useDispatch();

  const sideEffects = () => {
    dispatch(fetchRandomRestaurants());

  };

  useEffect(sideEffects,  [dispatch]);

  const restaurant = useSelector(state => {

   return state.swipeRestaurants
      ? state.swipeRestaurants[0]
      : null
  });

  const votes = useSelector(state => state.votes)
  const history = useHistory()
  console.log(votes.length)
  console.log(restaurant)
if (votes.length === 15 && restaurant === undefined) {
  history.push("/winner-page")
}

  const submitVote = (voteLiked) => {
    const vote = {
      voteRestaurantId: restaurant.restaurantId,
      voteSessionId: match.params.sessionId,
      voteLiked
    }
    httpConfig.post(`/apis/vote`, vote)
      .then(reply => {

        dispatch(setVote(vote))
          dispatch(moveToNextRestaurant());

      })
  }


  return (

    <>

      {/*Restaurant Name*/}

      <Container>
        <Row>
          <Col>
            <h2 className="text-white">Share This Link To Get Started! {window.location.href}</h2>
            {restaurant&& <h1 className="d-flex justify-content-center my-5 text-white">{restaurant.restaurantName}</h1>}
          </Col>
        </Row>
      </Container>

      {/*Swipe Game*/}

      <Container>
        <Row>
          <Col className="col-2 d-flex flex-column justify-content-center">
            <Button onClick={() => {submitVote(0)}} className="d-flex justify-content-center" variant="danger" size="lg">
              NO!
            </Button>
          </Col>
          <Col className="col-8 d-flex justify-content-center">
            {restaurant&& <Image fluid src={restaurant.restaurantImage} alt="food"/>}
          </Col>
          <Col className="col-2 d-flex flex-column justify-content-center">
            <Button onClick={() => {submitVote(1)}} className="d-flex justify-content-center" variant="warning" size="lg">
              YES!
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}