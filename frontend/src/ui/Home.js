import React from "react"
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./homeButtons.css"

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
          <Col className="pb-5 d-flex justify-content-center">
            <p>What would you like to do?</p>
          </Col>
        </Row>
      </Container>

      {/*Option Containers*/}

      <Container fluid>
        <Row>
          <Col md={4} className="d-grid gap-2 mx-auto">
            <Button className="target mx-5">Create Group</Button>

          </Col>
          <Col md={4} className="d-grid gap-2 mx-auto">
            <Button className="target mx-5">Join Group</Button>

          </Col>
          <Col md={4} className="d-grid gap-2 mx-auto">
            <Button className="target mx-5">Flying Solo</Button>

          </Col>
        </Row>
      </Container>



    </>
  )
}
