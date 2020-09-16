/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, ListItemIcon, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import authActions from 'redux/actions/Action.Auth';
import {
    ExitToApp,
    Drafts,
    Person,
    Settings,
    AddCircle,
} from '@material-ui/icons';
import utils from 'utils/utils';
import Color from 'config/constants/Colors';
import { useStyles, StyledMenu, StyledMenuItem } from './styles';

const Authenticated = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { displayName } = utils.getProfile();

    const onSubmitLogout = () => {
        props.onSubmitLogout();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (
        <Box component="div" className={classes.authenticated}>
            <Box component="div" className={classes.name}>
                {displayName}
            </Box>
            <Link to="/posts/new" className={classes.link}>
                <Button
                    variant="contained"
                    color={Color.primary}
                    startIcon={<AddCircle />}
                >
                    Sell my car
                </Button>
            </Link>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="default"
                onClick={handleClick}
                className={classes.navbarButton}
            >
                <Settings />
            </Button>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon className={classes.designIcon}>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon className={classes.designIcon}>
                        <Drafts />
                    </ListItemIcon>
                    <ListItemText primary="My post" />
                </StyledMenuItem>

                <Link to="/" className={classes.link}>
                    <StyledMenuItem onClick={onSubmitLogout}>
                        <ListItemIcon className={classes.designIcon}>
                            <ExitToApp />
                        </ListItemIcon>
                        <ListItemText primary="Log out" />
                    </StyledMenuItem>
                </Link>
            </StyledMenu>
        </Box>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onSubmitLogout: () => dispatch(authActions.logout()),
});

export default connect(null, mapDispatchToProps)(Authenticated);
