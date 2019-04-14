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
            font-size: 2rem;
            padding: 1rem 0;
        }
        .wishlist__data-description {
            font-size: 1.8rem;
            font-style: italic;
            padding: 1rem 0;
        }
        :hover {
            background-color: #eee;
            transition: background-color 0.2s ease-in-out;
        }
    }
`;

const FormStyle = styled.form`
    background: rgb(0, 0, 0, 0.02);
    padding: 20px;
    width: 40rem;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 600;
    label {
        display: block;
        margin-bottom: 1rem;
    }
    input {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid lightgrey;
        &:focus {
            outline: 0;
            border-color: green;
        }
    }
    button,
    input[type="submit"] {
        width: auto;
        padding: 0.5rem 1.2rem;
        border: 0;
        background: green;
        color: white;
        font-weight: 600;
    }
    fieldset {
        border: 0;
        padding: 0;
    }
`;

class Wishlists extends Component {
    render() {
        return (
            <>
                <FormStyle>
                    <fieldset>
                        <label for="name">
                            Name*
                            <input
                                name="name"
                                type="text"
                                placeholder="Add a name"
                            />
                        </label>
                        <label for="description">
                            Description
                            <input
                                name="description"
                                type="text"
                                placeholder="Add a description (optional)"
                            />
                        </label>
                        <button type="submit">Add wishlist</button>
                    </fieldset>
                </FormStyle>
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
