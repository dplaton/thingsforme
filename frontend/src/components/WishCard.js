import React from 'react';

import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
    IconButton
} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';

const WishCard = props => {
    const {title, imageUrl, description = '', url = '', wishlist} = props;
    return (
        <Card>
            <CardHeader title={title} subheader={`from ${wishlist.name}`} />
            <CardContent>
                <img src={imageUrl} />
                <Typography>{url}</Typography>
                <Typography>{description}</Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="edit">
                    <Edit />
                </IconButton>
                <IconButton aria-label="delete">
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default WishCard;
