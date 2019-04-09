import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import data from "../data/testData";

const WishlistDataStyle = styled.ul`
    list-style: none;
    li {
        border-bottom: 1px solid lightgrey;
        cursor: pointer;
        line-height: 2rem;
        .wishlist__data-name {
            font-size: 1.2rem;
        }
        .wishlist__data-description {
            font-size: 0.9rem;
            font-style: italic;
        }
    }
`;

class Wishlists extends Component {
    render() {
        return (
            <>
                <h1>These are your wishlists</h1>
                <WishlistDataStyle>
                    {data().map(wishlist => (
                        <Link
                            to={`/wishlist/${wishlist.id}/items`}
                            key={wishlist.id}
                        >
                            <li key={wishlist.id}>
                                <div className="wishlist__data-name">
                                    {wishlist.name}
                                </div>
                                <div className="wishlist__data-description">
                                    {wishlist.description}
                                </div>
                            </li>
                        </Link>
                    ))}
                </WishlistDataStyle>
            </>
        );
    }
}

export default Wishlists;
