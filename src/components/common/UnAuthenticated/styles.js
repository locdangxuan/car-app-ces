import { makeStyles } from '@material-ui/core';

import Color from 'config/constants/Colors';

const theme = {
    button: {
        borderColor: Color.darkGrey,
        width: '120px',
        height: '30px',
        borderRadius: '4px',
        marginLeft: '10px',
        backgroundColor: Color.transparent,
        color: Color.white,
    },
};

const useStyles = makeStyles({
    styleAuthButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    unAuthenticated: {
        display: 'flex',
    },
    unAuthenticatedWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        paddingRight: '10%',
    },
    styleText: {
        marginLeft: '4px',
        marginTop: '3px',
    },
});

export { theme, useStyles };
