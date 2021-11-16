import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";

export const ProfilePage = () => {

    return (
        <>
            <h1 className="d-flex justify-content-center">Create Your Profile!</h1>

            <Form>
                <Container className="form-group">
                    <Row className="col-sm-4">
                        <label htmlFor="firstname">First Name</label>
                        <input type="email" className="form-control" id="firstname" placeholder="name@example.com"/>
                    </Row>
                </Container>


                <Container className="form-group">
                    <Row className="col-sm-4">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="email" className="form-control" id="lastname" placeholder="name@example.com"/>
                 </Row>
            </Container>


                <Container className="form-group">
                    <Row className="form-group">
                        <Col className="col-sm-4">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                   placeholder="Enter email"/>
                        </Col>
                    </Row>
                </Container>


                        <Container className="form-group">
                            <Row className="form-group">
                                <Col className="col-sm-4">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password"
                                           placeholder="Password"/>
                                </Col>
                            </Row>
                        </Container>

                                <Container className="form-group">
                                    <Row className="form-group">
                                        <Col className="col-sm-4">
                                            <label htmlFor="confirmpassword">Confirm Password</label>
                                            <input type="password" className="form-control" id="confirmpassword"
                                                   placeholder="Password"/>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                                        </Col>
                                    </Row>
                                </Container>
                            </Form>
                        </>
                    )
}


