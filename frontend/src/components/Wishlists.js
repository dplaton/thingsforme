import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";

import ErrorMessage from "./ErrorMessage";
import FormStyle from "./styles/FormStyle";

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
    a {
        text-decoration: none;
    }
`;

const WISHSLISTS_QUERY = gql`
    query WISHSLISTS_QUERY {
        wishlists {
            id
            name
            description
        }
    }
`;

const CREATE_WISHLIST_MUTATION = gql`
    mutation ADD_WISHLIST_MUTATION($name: String!, $description: String) {
        createWishlist(name: $name, description: $description) {
            id
        }
    }
`;

class Wishlists extends Component {
    state = {
        name: "",
        description: ""
    };

    handleFormChange = event => {
        const { name, value } = event;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <>
                <Mutation
                    mutation={CREATE_WISHLIST_MUTATION}
                    variables={this.state}
                >
                    {(createWishlist, { loading, error, data }) => {
                        return (
                            <FormStyle
                                data-style="createWishlistForm"
                                onSubmit={async e => {
                                    e.preventDefault();
                                    const res = await createWishlist();
                                    console.log(res);
                                    // return (
                                    //     <Redirect
                                    //         to={`/wishlist/${
                                    //             res.data.createWishlsit.id
                                    //         }/items`}
                                    //     />
                                    //);
                                }}
                            >
                                <ErrorMessage error={error} />
                                <fieldset
                                    disabled={loading}
                                    aria-busy={loading}
                                >
                                    <label htmlFor="name">
                                        Name*
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Add a name"
                                            required
                                            onChange={this.handleFormChange}
                                        />
                                    </label>
                                    <label htmlFor="description">
                                        Description
                                        <input
                                            name="description"
                                            type="text"
                                            placeholder="Add a description (optional)"
                                            onChange={this.handleFormChange}
                                        />
                                    </label>
                                    <button type="submit">Add wishlist</button>
                                </fieldset>
                            </FormStyle>
                        );
                    }}
                </Mutation>
                <Query query={WISHSLISTS_QUERY}>
                    {({ data, loading, error }) => {
                        if (loading) return "Loading...";
                        if (error) {
                            return <ErrorMessage error={error} />;
                        }
                        return (
                            <WishlistDataStyle>
                                {data.wishlists.map(wishlist => (
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
                        );
                    }}
                </Query>
            </>
        );
    }
}

export default Wishlists;
