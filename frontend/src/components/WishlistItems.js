import React, { Component } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import AddWishlistItem from "./AddWishlistItem";
import ErrorMessage from "./ErrorMessage";

const ItemList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    grid-gap: 60px;
`;

const Item = styled.div`
    border: 1px solid #eee;
    box-shadow: 0 2px 4px 0 #eee;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    h2 {
        font-size: 2rem;
        padding: 0 2rem;
    }
    p {
        font-size: 1.5rem;
        font-weight: 300;
        padding: 0 3rem;
        flex-grow: 1;
    }
    .buttonList {
        background: lightgray;
        border-top: 1px solid lightgray;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-gap: 1px;
        width: 100%;
        & > * {
            background: white;
            border: 0;
            font-size: 1rem;
            padding: 1rem;
        }
        &:focus {
            border: 0;
        }
    }
`;

const WISHLIST_ITEMS_QUERY = gql`
    query WISHLIST_ITEMS_QUERY($id: ID!) {
        wishlistItems(where: { wishlist: { id: $id } }) {
            id
            title
            url
        }
    }
`;

class WishlistItem extends Component {
    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                <h1>Items on whishlist</h1>
                <AddWishlistItem wishlistId={id} />
                <Query query={WISHLIST_ITEMS_QUERY} variables={{ id }}>
                    {({ data: { wishlistItems }, loading, error }) => {
                        if (loading) return "Loading...";
                        if (error) return <ErrorMessage error={error} />;
                        console.log(wishlistItems);
                        return (
                            <ItemList>
                                {wishlistItems.map(wish => (
                                    <Item key={wish.id}>
                                        <h2>{wish.title}</h2>
                                        <img src={wish.imageUrl} />
                                        <p>{wish.url}</p>
                                        <p>{wish.description}</p>
                                        <div className="buttonList">
                                            <button>
                                                <span
                                                    role="img"
                                                    aria-label="edit"
                                                >
                                                    ✏️
                                                </span>{" "}
                                                Edit
                                            </button>
                                            <button>Delete</button>
                                        </div>
                                    </Item>
                                ))}
                            </ItemList>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

export { WISHLIST_ITEMS_QUERY };
export default WishlistItem;
