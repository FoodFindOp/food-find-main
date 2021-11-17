import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import pandaPic from './images/panda.png'

export const WinnerPage = () => {

  return (
    <>
    <h1 className="d-flex justify-content-center my-5">Panda Express!</h1>
    <Container>
      <Row>
        <Col className="col-md-6 d-flex flex-column justify-content-center align-items-center my-md-5">
          <Image src={pandaPic} alt="chinese food" width="300" height="300" />
        </Col>
        <Col className="col-md-6 d-flex justify-content-center my-5">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Menu</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi quae temporibus. In reprehenderit saepe voluptatem? Cum, eveniet explicabo odit porro quisquam rerum temporibus voluptatum?
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>Reviews</Card.Title>
              <Card.Text>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus in incidunt ipsam quas soluta! Est eum eveniet expedita fugiat libero quas quos, similique soluta veniam?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>




    </>
  )
}