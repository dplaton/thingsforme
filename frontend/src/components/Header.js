import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";

const Logo = styled.div``;

const StyledHeader = styled.header`
    .bar {
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        border-bottom: 10px solid lightgray;
    }
    a {
        text-decoration: none;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <div className="bar">
                <Link to="/">
                    <Logo>
                        <div className="first">Things</div>
                        <span className="second">for ME</span>
                    </Logo>
                </Link>
                <Navigation />
            </div>
        </StyledHeader>
    );
};

export default Header;
