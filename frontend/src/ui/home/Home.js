import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Button, Modal, Form, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import buttons from '../shared/components/Buttons.module.css'
import '../shared/components/Bg.css'
import {v4 as uuidv4} from 'uuid'
import { httpConfig } from '../shared/utils/httpConfig'


export const Home = () => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [show3, setShow3] = useState(false)

  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)



  let history = useHistory()
  const createSession = () => {
const newSessionId = uuidv4()
    httpConfig.post(`/apis/session`, {
      sessionId: newSessionId
    })
      .then(reply => {

        history.push(`/swiper-page/${newSessionId}`)
        // dispatch(fetchSessionBySessionId)
      })
  }

  return (



  <>

      <Container className="col-3 text-light">
        <Row>
          <Col className="py-5 d-flex justify-content-center">
            <h1>Fork It!</h1>
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

          {/*Create group*/}

          <Col md={6} className="d-grid gap-2 mx-auto">
            <Button className={buttons.height} onClick={handleShow}>Create Group</Button>

            {/*Create group modal*/}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create Group</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                {/*Create group form*/}

                <Form>
                  <Form.Group className="mb-3" controlId="formGroupAddress">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="address" placeholder="Enter Zip Code"/>
                  </Form.Group>
                </Form>

              </Modal.Body>
              <Modal.Footer>
                <Nav.Link>
                {/*  <Link>*/}
                    <Button variant="primary" onClick={createSession}>
                      Start Game!
                    </Button>
                  {/*</Link>*/}
                </Nav.Link>
              </Modal.Footer>
            </Modal>
          </Col>

          {/*Flying solo*/}

          <Col md={6} className="d-grid gap-2 mx-auto">
            <Button className={buttons.height} onClick={handleShow3}>Flying Solo</Button>

            {/*Flying solo modal*/}

            <Modal show={show3} onHide={handleClose3}>
              <Modal.Header closeButton>
                <Modal.Title>Flying Solo</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                {/*Flying solo form*/}

                <Form>
                  <Form.Group className="mb-3" controlId="formGroupAddress">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="address" placeholder="Enter Zip Code"/>
                  </Form.Group>
                </Form>

              </Modal.Body>
              <Modal.Footer>
                <Nav.Link>
                  {/*<Link to="/swiper-page">*/}
                    <Button variant="primary" onClick={createSession}>
                      Start Game!
                    </Button>
                  {/*</Link>*/}
                </Nav.Link>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
  </>
  )
}

