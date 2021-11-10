import React from "react"
import { Container, Row, Col, Button } from 'react-bootstrap'

export const Home = () => {
  return (
    <>

      {/*Website Name*/}

      <Container>
        <Row>
          <Col className="py-5 d-flex justify-content-center">
            <h1>Restaurant Tinder</h1>
          </Col>
        </Row>
        <Row>
          <Col className="py-5 d-flex justify-content-center">
            <p>What would you like to do?</p>
          </Col>
        </Row>
      </Container>

      {/*Option Containers*/}

      <Container>
        <Row>
          <Col className="d-grid gap-2 col-md-3 mx-auto">
            <Button size="lg">Create Group</Button>

          </Col>
          <Col className="d-grid gap-2 col-md-3 mx-auto">
            <Button>Join Group</Button>

          </Col>
          <Col className="d-grid gap-2 col-md-3 mx-auto">
            <Button>Flying Solo</Button>

          </Col>
        </Row>
      </Container>



    </>
  )
}
