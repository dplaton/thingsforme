import React from "react";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = props => {
    return (
        <Col md={12}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <NavLink to={"/"} exact={true}>
                        Home
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <LinkContainer to={"/wishlists"} exact={true}>
                            <Nav.Item eventkey={1}>My Wishlists</Nav.Item>
                        </LinkContainer>
                        <LinkContainer to={"/account"} exact={true}>
                            <Nav.Item>My Account</Nav.Item>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    );
};

export default Navigation;
