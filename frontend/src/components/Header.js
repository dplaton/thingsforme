import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

import {Toolbar, AppBar, IconButton, Menu, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flowGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        className={classes.menuButton}
                        aria-label="menu">
                        <Menu open={false} />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Wishlists
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
