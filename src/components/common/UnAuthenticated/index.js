/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'components/common';
import { connect } from 'react-redux';
import { Typography, Box } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import * as action from 'redux/actions/Action.GetCar';
import component from 'config/constants/Components';
import { theme, useStyles } from './styles';

const UnAuthenticated = (props) => {
    useEffect(() => {
        props.actRequestProducts();
    }, []);
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

UnAuthenticated.propsTypes = {
    actRequestProducts: PropTypes.func,
};

UnAuthenticated.defaultProps = {
    actRequestProducts: () => {},
};

const MapDispatchToProps = (dispatch) => {
    return {
        actRequestProducts: () => {
            dispatch(action.actRequestProducts());
        },
    };
};

export default connect(null, MapDispatchToProps)(UnAuthenticated);
