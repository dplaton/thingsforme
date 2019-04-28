import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import FormStyle from "./styles/FormStyle";
import ErrorMessage from "./ErrorMessage";
import { WISHLIST_ITEMS_QUERY } from "./WishlistItems";

const ADD_WISHLIST_ITEM_MUTATION = gql`
    mutation ADD_WISHLIST_ITEM_MUTATION(
        $title: String!
        $url: String!
        $description: String
        $reason: String
        $imageUrl: String
        $wishlistId: String!
    ) {
        addWishlistItem(
            title: $title
            url: $url
            description: $description
            reason: $reason
            imageUrl: $imageUrl
            wishlistId: $wishlistId
        ) {
            id
            title
            url
        }
    }
`;

class AddWishlistItem extends Component {
    state = {
        title: "",
        url: "",
        description: "",
        imageUrl: "",
        reason: "",
        wishlistId: this.props.wishlistId
    };

    handleFormChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <Mutation
                mutation={ADD_WISHLIST_ITEM_MUTATION}
                variables={this.state}
                refetchQueries={[
                    {
                        query: WISHLIST_ITEMS_QUERY,
                        variables: { id: this.props.wishlistId }
                    }
                ]}
            >
                {(addWishlistItem, { loading, error, data }) => {
                    return (
                        <>
                            <ErrorMessage error={error} />
                            <FormStyle
                                onSubmit={async event => {
                                    event.preventDefault();
                                    const res = await addWishlistItem();
                                }}
                            >
                                <fieldset
                                    disabled={loading}
                                    aria-busy={loading}
                                >
                                    <label htmlFor="title">
                                        Title
                                        <input
                                            type="text"
                                            name="title"
                                            required
                                            onChange={this.handleFormChange}
                                        />
                                    </label>
                                    <label htmlFor="url">
                                        URL
                                        <input
                                            type="text"
                                            name="url"
                                            required
                                            onChange={this.handleFormChange}
                                        />
                                    </label>
                                </fieldset>
                                <button type="submit">Add item</button>
                            </FormStyle>
                        </>
                    );
                }}
            </Mutation>
        );
    }
}

export default AddWishlistItem;
