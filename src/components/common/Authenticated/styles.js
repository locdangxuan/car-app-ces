/* eslint-disable react/jsx-props-no-spreading */
import { MenuItem, makeStyles, withStyles } from '@material-ui/core';
import Color from 'config/constants/Colors';
import { fontSize } from 'config/constants/Fonts';

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
        fontSize: fontSize.fontMedium,
        fontWeight: 'bold',
        cursor: 'default',
    },
    link: {
        textDecoration: 'none',
        color: Color.black,
    },
    designIcon: {
        minWidth: '40px',
    },
});

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

export { useStyles, StyledMenuItem };
