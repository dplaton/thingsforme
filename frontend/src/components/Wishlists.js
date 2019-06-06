import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import {withRouter} from "react-router-dom";

import ErrorMessage from "./ErrorMessage";
import AddWishlist from "./AddWishlist";
import List from "./styles/List";

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
                    {({data, loading, error}) => {
                        if (loading) return "Loading...";
                        if (error) {
                            return <ErrorMessage error={error} />;
                        }
                        return (
                            <List>
                                {data.wishlists.map(wishlist => (
                                    <Link
                                        to={`/wishlist/${wishlist.id}/items`}
                                        key={wishlist.id}>
                                        <li key={wishlist.id}>
                                            <img
                                                src="https://picsum.photos/100"
                                                alt="placeholder"
                                            />
                                            <div className="data">
                                                <div className="name">
                                                    {wishlist.name}
                                                </div>
                                                <div className="description">
                                                    {wishlist.description}
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button>
                                                    <span role="img">❌</span>{" "}
                                                    Delete
                                                </button>
                                                <button>
                                                    <span role="img">✏️</span>{" "}
                                                    Edit
                                                </button>
                                            </div>
                                        </li>
                                    </Link>
                                ))}
                            </List>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

export default withRouter(Wishlists);
export {WISHSLISTS_QUERY};
