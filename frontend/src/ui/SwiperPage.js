import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import pandaPic from './images/panda.png'

export const SwiperPage = () => {

  return (
    <>
      <h1 className="d-flex justify-content-center my-5">Name of restaurant</h1>

      <Container>
        <Row>
          <Col className="col-2 d-flex flex-column justify-content-center">
            <Button variant="danger" size="sm">
              NO!
            </Button>
          </Col>
            <Col className="col-8 d-flex justify-content-center">
              <Image src={pandaPic} alt="chinese food" width="300" height="300" />
            </Col>
          <Col className="col-2 d-flex flex-column justify-content-center">
            <Button variant="success" size="sm">
              YES!
            </Button>
          </Col>
        </Row>
      </Container>




    </>
  )
}