import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logoStyles from './StyleLogo.module.css';
export const LandingPage = () => {

    return (
        <>
            <h1 className="d-flex justify-content-center mt-5">ForkIt!</h1>

            <Container>
                <Row>
                    <Col className="d-flex justify-content-center my-5">

                            <FontAwesomeIcon className={logoStyles.faUtensils} icon="utensils"/>


                    </Col>
                </Row>
            </Container>

        </>
    )
}

