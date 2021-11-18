import React from 'react'
import { Col, Container, Row, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoStyles from './StyleLogo.module.css'

export const LandingPage = () => {

  return (

    <>

      {/*Title*/}

      <Container>
        <Row>
          <Col>
            <h1 className="d-flex justify-content-center mt-5 text-white">ForkIt!</h1>
          </Col>
        </Row>
      </Container>

      {/*Logo*/}

      <Container>
        <Row>
          <Col className="d-flex justify-content-center my-5">
            <Nav.Link>
              <Link to="/">
                <FontAwesomeIcon className={logoStyles.faUtensils} icon="utensils"/>
              </Link>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

