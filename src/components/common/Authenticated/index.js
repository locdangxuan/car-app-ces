/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Box,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DraftsIcon from '@material-ui/icons/Drafts';
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles({
    authenticated: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '10%',
    },
    navbarButton: {
        padding: 0,
        borderRadius: '50%',
        minWidth: '20px',
        background: 'white',
    },
    name: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20%',
        fontSize: '20px',
        fontWeight: 'bold',
    },
});

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
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

const Authenticated = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

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
                Master Phat
            </Box>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="default"
                onClick={handleClick}
                className={classes.navbarButton}
            >
                <ArrowDropDownIcon />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <PersonIcon fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText primary="View Profile" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <DraftsIcon fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText primary="View post" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText primary="Log out" />
                </StyledMenuItem>
            </StyledMenu>
        </Box>
    );
};

export default Authenticated;
