import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import ErrorMessage from "./ErrorMessage";
import FormStyle from "./styles/FormStyle";

const CREATE_WISHLIST_MUTATION = gql`
    mutation ADD_WISHLIST_MUTATION($name: String!, $description: String) {
        createWishlist(name: $name, description: $description) {
            id
        }
    }
`;

class AddWishlist extends Component {
    state = {
        name: "",
        description: ""
    };

    handleFormChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
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
                                let to = `/wishlist/${
                                    res.data.createWishlist.id
                                }/items`;
                                this.props.history.push({ pathname: to });
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
        );
    }
}

export default withRouter(AddWishlist);
