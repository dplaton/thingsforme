import React, { useState } from "react";
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

const AddWishlistItem = props => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [reason, setReason] = useState("");
    const [wishlistId, setWishlistId] = useState(props.wishlistId);

    return (
        <Mutation
            mutation={ADD_WISHLIST_ITEM_MUTATION}
            variables={{
                title,
                url,
                description,
                imageUrl,
                reason,
                wishlistId
            }}
            refetchQueries={[
                {
                    query: WISHLIST_ITEMS_QUERY,
                    variables: { id: wishlistId }
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
                            <fieldset disabled={loading} aria-busy={loading}>
                                <label htmlFor="title">
                                    Title
                                    <input
                                        type="text"
                                        name="title"
                                        required
                                        onChange={e => {
                                            setTitle(e.target.value);
                                        }}
                                    />
                                </label>
                                <label htmlFor="url">
                                    URL
                                    <input
                                        type="text"
                                        name="url"
                                        required
                                        onChange={e => setUrl(e.target.value)}
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
};

export default AddWishlistItem;
