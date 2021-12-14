import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchRandomRestaurants } from '../../store/swipeRestaurants'
import { httpConfig } from '../shared/utils/httpConfig'


export const SwiperPage = ({match}) => {

  const dispatch = useDispatch();

  const sideEffects = () => {
    dispatch(fetchRandomRestaurants());

  };

  useEffect(sideEffects,  [dispatch]);

  const restaurant = useSelector(state => {
console.log(state)
   return state.swipeRestaurants
      ? state.swipeRestaurants[0]
      : null
  });


  const submitVote = () => {
    httpConfig.post(`/apis/vote`, {
      voteRestaurantId: restaurant.restaurantId,
      voteSessionId: match.params.sessionId,
      voteLiked: 1
    })
      .then(reply => {
        // let {message, type} = reply

        // if(reply.status === 200) {
          dispatch(fetchRandomRestaurants());
        // }
        // console.log(reply)
      })
  }
const submitNo = () => {
  dispatch(fetchRandomRestaurants());
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
            <Button onClick={submitNo} className="d-flex justify-content-center" variant="danger" size="lg">
              NO!
            </Button>
          </Col>
          <Col className="col-8 d-flex justify-content-center">
            {restaurant&& <Image fluid src={restaurant.restaurantImage} alt="food"/>}
          </Col>
          <Col className="col-2 d-flex flex-column justify-content-center">
            <Button onClick={submitVote} className="d-flex justify-content-center" variant="warning" size="lg">
              YES!
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}