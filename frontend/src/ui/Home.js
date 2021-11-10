import React from "react"
import { useState } from 'react'
import { Container, Row, Col, Button, Modal, } from 'react-bootstrap'
import "./homeButtons.css"

export const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <Button className="target mx-5" onClick={handleShow}>Create Group</Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create Group</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>

          <Col md={4} className="d-grid gap-2 mx-auto">
            <Button className="target mx-5" onClick={handleShow}>Join Group</Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Join Group</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>

          <Col md={4} className="d-grid gap-2 mx-auto">
            <Button className="target mx-5" onClick={handleShow}>Flying Solo</Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Flying Solo</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>



    </>
  )
}
