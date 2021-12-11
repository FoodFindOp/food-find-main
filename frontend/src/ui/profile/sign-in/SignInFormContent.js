import {FormDebugger} from "../../shared/components/FormDebugger";
import React from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'

export const SignInFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
            <Container className="text-white">
                <Row>
                    <Col>
                        <p className="fs-3">Sign In</p>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="profileEmail">Email Address</Form.Label>
                        <Form.Control
                            className="form-control"
                            id="profileEmail"
                            type="email"
                            value={values.profileEmail}
                            placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />

                    {
                        errors.profileEmail && touched.profileEmail && (
                            <div className="alert alert-danger">
                                {errors.profileEmail}
                            </div>
                        )

                    }
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="profilePassword">Password</Form.Label>
                        <Form.Control
                            id="profilePassword"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            value={values.profilePassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    {errors.profilePassword && touched.profilePassword && (
                        <div className="alert alert-danger">{errors.profilePassword}</div>
                    )}
                </Form.Group>

                <div className="col-sm-6 form-group">
                    <button className="btn btn-primary my-3" type="submit">Submit</button>
                </div>

            </Form>
            {status && (<div className={status.type}>{status.message}</div>)}
                    </Col>
                </Row>
            </Container>
        </>
    )
};