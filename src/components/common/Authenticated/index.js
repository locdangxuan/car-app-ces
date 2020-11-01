/* eslint-disable no-useless-return */
/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
    List,
} from '@material-ui/core';
import { connect } from 'react-redux';
import authActions from 'redux/actions/Action.Auth';
import * as action from 'redux/actions/Action.GetCar';
import {
    ExitToApp,
    Drafts,
    Person,
    Settings,
    AddCircle,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import utils from 'utils/utils';
import Color from 'config/constants/Colors';
import component from 'config/constants/Components';
import variant from 'config/constants/Variant';
import { useStyles, StyledMenuItem } from './styles';

const Authenticated = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
    const { displayName, id } = utils.getProfile();

    const toggleMenuHeaderDrawer = (status) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        )
            return;
        setOpenMenu(status);
    };

    const onSubmitLogout = () => {
        props.onSubmitLogout();
    };

    const getPostsByUser = () => {
        props.actRequestProductsSearch('user', id.toString());
    };

    const classes = useStyles();

    return (
        <Box component={component.div} className={classes.authenticated}>
            <Box component={component.div} className={classes.name}>
                {displayName}
            </Box>
            <Link to="/posts/new" className={classes.link}>
                <Button
                    variant={variant.contained}
                    color={Color.primary}
                    startIcon={<AddCircle />}
                    className={classes.btnSell}
                >
                    Sell my car
                </Button>
            </Link>
            <React.Fragment key="right">
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant={variant.contained}
                    color={Color.defaultColor}
                    onClick={toggleMenuHeaderDrawer(true)}
                    className={classes.navbarButton}
                >
                    <Settings />
                </Button>
                <SwipeableDrawer
                    anchor="right"
                    open={openMenu}
                    onClose={toggleMenuHeaderDrawer(false)}
                    onOpen={toggleMenuHeaderDrawer(true)}
                >
                    <Box
                        component={component.div}
                        role="presentation"
                        onClick={toggleMenuHeaderDrawer(false)}
                        onKeyDown={toggleMenuHeaderDrawer(false)}
                    >
                        <List>
                            <Link to="/user/profile" className={classes.link}>
                                <StyledMenuItem>
                                    <ListItemIcon
                                        className={classes.designIcon}
                                    >
                                        <Person />
                                    </ListItemIcon>
                                    <ListItemText primary="My Profile" />
                                </StyledMenuItem>
                            </Link>
                            <Link to="/" className={classes.link}>
                                <StyledMenuItem onClick={getPostsByUser}>
                                    <ListItemIcon
                                        className={classes.designIcon}
                                    >
                                        <Drafts />
                                    </ListItemIcon>
                                    <ListItemText primary="My post" />
                                </StyledMenuItem>
                            </Link>
                            <StyledMenuItem onClick={onSubmitLogout}>
                                <ListItemIcon className={classes.designIcon}>
                                    <ExitToApp />
                                </ListItemIcon>
                                <ListItemText primary="Log out" />
                            </StyledMenuItem>
                        </List>
                    </Box>
                </SwipeableDrawer>
            </React.Fragment>
        </Box>
    );
};

Authenticated.propTypes = {
    onSubmitLogout: PropTypes.func,
    actRequestProductsSearch: PropTypes.func,
};

Authenticated.defaultProps = {
    onSubmitLogout: () => {},
    actRequestProductsSearch: () => {},
};

const mapDispatchToProps = (dispatch) => ({
    onSubmitLogout: () => dispatch(authActions.logout()),
    actRequestProductsSearch: (orderBy, value) => {
        dispatch(action.actRequestProductsSearch(orderBy, value));
    },
});

export default connect(null, mapDispatchToProps)(Authenticated);
