import React, { useState } from 'react';
import Color from 'config/constants/Colors';
import { Modal, Button, Icon } from 'components/common';
import Images from 'config/constants/Images';
import dataHeaderDefault from 'config/sampleData/header';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

const theme = {
    button: {
        borderColor: Color.darkGrey,
        width: '120px',
        height: '30px',
        borderRadius: '4px',
        margin: '0 0 0 10px',
        backgroundColor: Color.transparent,
        color: Color.white,
    },
};

const src = {
    LoginIcon: Images.LoginIcon
        ? Images.LoginIcon
        : dataHeaderDefault.LoginIcon,
    SignUpIcon: Images.SignupIcon
        ? Images.SignupIcon
        : dataHeaderDefault.SignupIcon,
};

const useStyles = makeStyles({
    headerContainer: {
        margin: '0',
        width: '100%',
    },
    styleAuthButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    unAuthenticated: {
        display: 'flex',
    },
});

const UnAuthenticated = () => {
    const [loginF, setLoginF] = useState(false);
    const [registerF, setRegisterF] = useState(false);
    const toggleLogin = () => {
        setLoginF(!loginF);
    };
    const toggleRegister = () => {
        setRegisterF(!registerF);
    };
    const classes = useStyles();
    return (
        <Box component="div">
            <ThemeProvider theme={theme}>
                <Box component="div" className={classes.unAuthenticated}>
                    <Button
                        className={classes.styleAuthButton}
                        onClick={toggleLogin}
                    >
                        <Icon src={src.LoginIcon} alt="login-icon" />
                        <Typography component="caption">Login</Typography>
                    </Button>
                    <Button
                        className={classes.styleAuthButton}
                        onClick={toggleRegister}
                    >
                        <Icon src={src.SignUpIcon} alt="signup-icon" />
                        <Typography component="caption">Signup</Typography>
                    </Button>
                </Box>
            </ThemeProvider>
            {registerF === true && (
                <Modal type="REGISTER" handlerToggle={toggleRegister} />
            )}
            {loginF === true && (
                <Modal type="LOGIN" handlerToggle={toggleLogin} />
            )}
        </Box>
    );
};

export default UnAuthenticated;
