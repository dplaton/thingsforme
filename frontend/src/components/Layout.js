import React from "react";
import { Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";

const layout = props => (
    <Container>
        <Row>
            <Navigation />
        </Row>
        <main>{props.children}</main>
    </Container>
);

export default layout;
