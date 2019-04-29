import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";

import ErrorMessage from "./ErrorMessage";
import AddWishlist from "./AddWishlist";

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
        wishlists(orderBy: createdAt_DESC) {
            id
            name
            description
        }
    }
`;

class Wishlists extends Component {
    render() {
        return (
            <div>
                <AddWishlist />
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
            </div>
        );
    }
}

export default withRouter(Wishlists);
export { WISHSLISTS_QUERY };
