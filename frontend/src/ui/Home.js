import React from "react"
import { useState } from 'react'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'
import "./homeButtons.css"

export const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);


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
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Group Name" /></Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Enter Password" /></Form.Group>


                </Form>



              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>

          <Col md={4} className="d-grid gap-2 mx-auto">
            <Button className="target mx-5" onClick={handleShow2}>Join Group</Button>

            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title>Join Group</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose2}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>

          <Col md={4} className="d-grid gap-2 mx-auto">
            <Button className="target mx-5" onClick={handleShow3}>Flying Solo</Button>

            <Modal show={show3} onHide={handleClose3}>
              <Modal.Header closeButton>
                <Modal.Title>Flying Solo</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose3}>
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
