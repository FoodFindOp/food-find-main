import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import restaurant from '../../store/restaurant'
import { fetchRandomRestaurants } from '../../store/swipeRestaurants'
import { setRandomRestaurants } from '../../store/swipeRestaurants'

export const SwiperPage = () => {

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

  console.log(restaurant)
  return (

    <>

      {/*Restaurant Name*/}

      <Container>
        <Row>
          <Col>
            {restaurant&& <h1 className="d-flex justify-content-center my-5 text-white">{restaurant.restaurantName}</h1>}
          </Col>
        </Row>
      </Container>

      {/*Swipe Game*/}

      <Container>
        <Row>
          <Col className="col-2 d-flex flex-column justify-content-center">
            <Button className="d-flex justify-content-center" variant="danger" size="lg">
              NO!
            </Button>
          </Col>
          <Col className="col-8 d-flex justify-content-center">
            {restaurant&& <Image fluid src={restaurant.restaurantImage} alt="food"/>}
          </Col>
          <Col className="col-2 d-flex flex-column justify-content-center">
            <Button className="d-flex justify-content-center" variant="success" size="lg">
              YES!
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}