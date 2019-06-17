import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Grid} from '@material-ui/core';

import WishCard from './WishCard';
import ErrorMessage from './ErrorMessage';

const WISHLIST_ITEMS_QUERY = gql`
    query WISHLIST_ITEMS_QUERY($id: ID!) {
        wishlistItems(where: {wishlist: {id: $id}}) {
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
                <Query query={WISHLIST_ITEMS_QUERY} variables={{id}}>
                    {({data: {wishlistItems}, loading, error}) => {
                        if (loading) return 'Loading...';
                        if (error) return <ErrorMessage error={error} />;
                        console.log(wishlistItems);
                        return (
                            <Grid container spacing={3}>
                                {wishlistItems.map(wish => (
                                    <Grid item s key={wish.id}>
                                        <WishCard {...wish} />
                                    </Grid>
                                    //     <h2>{wish.title}</h2>
                                    //     <img src={wish.imageUrl} />
                                    //     <p>{wish.url}</p>
                                    //     <p>{wish.description}</p>
                                    //     <div className="buttonList">
                                    //         <button>
                                    //             <span
                                    //                 role="img"
                                    //                 aria-label="edit">
                                    //                 ✏️
                                    //             </span>{' '}
                                    //             Edit
                                    //         </button>
                                    //         <button>Delete</button>
                                    //     </div>
                                    // </WishCard>
                                ))}
                            </Grid>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

export {WISHLIST_ITEMS_QUERY};
export default WishlistItem;
