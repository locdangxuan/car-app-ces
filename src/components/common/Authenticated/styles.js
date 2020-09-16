/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Menu, MenuItem, makeStyles, withStyles } from '@material-ui/core';
import Color from 'config/constants/Colors';

const useStyles = makeStyles({
    authenticated: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '10%',
    },
    navbarButton: {
        padding: 0,
        background: Color.white,
        height: '35px',
        minWidth: '50px',
    },
    name: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    link: {
        textDecoration: 'none',
        color: Color.black,
    },
    designIcon: {
        minWidth: '40px',
    },
});

const StyledMenu = withStyles({
    paper: {
        border: `1px solid ${Color.borderStyledMenu}`,
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export { useStyles, StyledMenu, StyledMenuItem };
