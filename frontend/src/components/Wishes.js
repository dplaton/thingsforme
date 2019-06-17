import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import {Grid} from '@material-ui/core';

import WishCard from './WishCard';

const WISHES_QUERY = gql`
    query allWishlistItems {
        wishlistItems {
            id
            title
            description
            imageUrl
            url
            wishlist {
                id
                name
            }
        }
    }
`;

const Wishes = () => {
    return (
        <div>
            <Query query={WISHES_QUERY}>
                {({data, loading, error}) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error</p>;
                    console.log(data);
                    return (
                        <Grid container spacing={2}>
                            {data.wishlistItems.map(wish => {
                                return (
                                    <Grid item key={wish.id} sm={3}>
                                        <WishCard {...wish} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    );
                }}
            </Query>
        </div>
    );
};

export default Wishes;
