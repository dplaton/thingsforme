import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationStyle = styled.ul`
    list-style: none;
    display: flex;
    justify-self: end;
    margin: 0;
    padding: 0;

    a {
        padding: 1rem 3rem;
        display: flex;
        align-items: center;
        font-weight: 500;
        text-decoration: none;
        font-size: 2rem;
        cursor: pointer;
    }
`;

const Navigation = props => {
    return (
        <NavigationStyle>
            <Link to="/wishlists">My wishlists</Link>
            <Link to="/account">My account</Link>
        </NavigationStyle>
    );
};

export default Navigation;
