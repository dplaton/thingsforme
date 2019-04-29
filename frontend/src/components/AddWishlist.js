import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import ErrorMessage from "./ErrorMessage";
import FormStyle from "./styles/FormStyle";
import { WISHSLISTS_QUERY } from "./Wishlists";

const CREATE_WISHLIST_MUTATION = gql`
    mutation ADD_WISHLIST_MUTATION($name: String!, $description: String) {
        createWishlist(name: $name, description: $description) {
            id
        }
    }
`;

const AddWishlist = props => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <Mutation
            mutation={CREATE_WISHLIST_MUTATION}
            variables={{ name, description }}
            refetchQueries={[{ query: WISHSLISTS_QUERY }]}
        >
            {(createWishlist, { loading, error, data }) => {
                return (
                    <FormStyle
                        data-style="createWishlistForm"
                        onSubmit={async e => {
                            e.preventDefault();
                            const res = await createWishlist();
                            console.log(res);
                            let to = `/wishlist/${
                                res.data.createWishlist.id
                            }/items`;
                            props.history.push({ pathname: to });
                        }}
                    >
                        <ErrorMessage error={error} />
                        <fieldset disabled={loading} aria-busy={loading}>
                            <label htmlFor="name">
                                Name*
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Add a name"
                                    required
                                    onChange={e => {
                                        setName(e.target.value);
                                    }}
                                />
                            </label>
                            <label htmlFor="description">
                                Description
                                <input
                                    name="description"
                                    type="text"
                                    placeholder="Add a description (optional)"
                                    onChange={e => {
                                        setDescription(e.target.value);
                                    }}
                                />
                            </label>
                            <button type="submit">Add wishlist</button>
                        </fieldset>
                    </FormStyle>
                );
            }}
        </Mutation>
    );
};

export default withRouter(AddWishlist);
