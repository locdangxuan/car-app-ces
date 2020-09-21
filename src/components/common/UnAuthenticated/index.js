import React, { useState } from 'react';
import { Modal, Button } from 'components/common';
import { Typography, Box } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import component from 'config/constants/Components';
import { theme, useStyles } from './styles';

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
        <Box
            component={component.div}
            className={classes.unAuthenticatedWrapper}
        >
            <ThemeProvider theme={theme}>
                <Box
                    component={component.div}
                    className={classes.unAuthenticated}
                >
                    <Button
                        className={classes.styleAuthButton}
                        onClick={toggleLogin}
                    >
                        <PersonIcon />
                        <Typography className={classes.styleText}>
                            Login
                        </Typography>
                    </Button>
                    <Button
                        className={classes.styleAuthButton}
                        onClick={toggleRegister}
                    >
                        <PersonAddIcon />
                        <Typography className={classes.styleText}>
                            Signup
                        </Typography>
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
