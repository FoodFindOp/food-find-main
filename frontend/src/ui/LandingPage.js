import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";



export const LandingPage = () => {

    return (
        <>
            <h1 className="d-flex justify-content-center">LandingPage</h1>

            <Container>
                <Row md="auto">
                    <Col md="auto">
                        <Image src="./images/logopicture.png" />

                    </Col>
                </Row>
            </Container>

        </>
    )
}

