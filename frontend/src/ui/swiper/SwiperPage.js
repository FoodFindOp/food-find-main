import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import pandaPic from '../images/panda.png'

export const SwiperPage = () => {

  return (

    <>

      {/*Restaurant Name*/}

      <Container>
        <Row>
          <Col>
            <h1 className="d-flex justify-content-center my-5 text-white">Name of restaurant</h1>
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
            <Image src={pandaPic} alt="chinese food" width="300" height="300"/>
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