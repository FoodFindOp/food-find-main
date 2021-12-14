import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

export const SignUpFormContent = (props) => {
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
    } = props;
    return (
        <>
<Container className="text-white">
    <Row>
        <Col>
            <p className="fs-3">Sign Up</p>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="profileEmail">Email Address</Form.Label>
                        <Form.Control
                            className="form-control"
                            name="profileEmail"
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
                            name="profilePassword"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            value={values.profilePassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Group>
                    {errors.profilePassword && touched.profilePassword && (
                        <div className="alert alert-danger">{errors.profilePassword}</div>
                    )}
                <Form.Group>
                    <Form.Label htmlFor="profilePasswordConfirm">Confirm Your Password</Form.Label>
                        <Form.Control

                            className="form-control"
                            type="password"
                            name="profilePasswordConfirm"
                            placeholder="Password Confirm"
                            value={values.profilePasswordConfirm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    {errors.profilePasswordConfirm && touched.profilePasswordConfirm && (
                        <div className="alert alert-danger">{errors.profilePasswordConfirm}</div>
                    )}
                </Form.Group>



                <Form.Group>
                    <Form.Label htmlFor="profileName">Profile Name</Form.Label>
                        <Form.Control
                            className="form-control"
                            name="profileName"
                            type="text"
                            value={values.profileName}
                            placeholder="Enter name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    {
                        errors.profileName && touched.profileName && (
                            <div className="alert alert-danger">
                                {errors.profileName}
                            </div>
                        )

                    }
                </Form.Group>
                <div className="col-sm-6 form-group px-3">
                    <button className="btn btn-warning my-3" type="submit">Submit</button>
                </div>
            </Form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </Col>
    </Row>
</Container>
        </>
    )
}