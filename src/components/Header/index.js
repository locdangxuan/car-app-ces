/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Images from 'config/constants/Images';
import {
    Image,
    UnAuthenticated,
    Authenticated,
    Categories,
} from 'components/common';
import dataHeaderDefault from 'config/sampleData/header';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import authAction from 'redux/actions/Action.Auth';
import * as carAction from 'redux/actions/Action.GetCar';
import component from 'config/constants/Components';
import { HeaderWrapper, GridHeader, useStyles } from './styles';

const src = {
    LogoHeader: Images.LogoHeader
        ? Images.LogoHeader
        : dataHeaderDefault.LogoHeader,
};

const Header = (props) => {
    const classes = useStyles();
    const { isLogginSucceed, verifyAuthenticationStatus } = props;
    useEffect(() => {
        verifyAuthenticationStatus();
    }, []);
    const getListCarInHomePage = () => {
        props.actRequestProducts();
    };
    return (
        <Box component={component.div}>
            <HeaderWrapper>
                <GridHeader
                    container
                    className={classes.headerContainer}
                    spacing={2}
                >
                    <GridHeader item xs={2}>
                        <Link to="/">
                            <Image
                                src={src.LogoHeader}
                                alt="logo-header"
                                onClick={getListCarInHomePage}
                            />
                        </Link>
                    </GridHeader>
                    <GridHeader item xs={6}>
                        <Categories />
                    </GridHeader>
                    <GridHeader item xs={4}>
                        {isLogginSucceed === true ? (
                            <Authenticated />
                        ) : (
                            <UnAuthenticated />
                        )}
                    </GridHeader>
                </GridHeader>
            </HeaderWrapper>
        </Box>
    );
};

Header.propTypes = {
    isLogginSucceed: PropTypes.bool,
    verifyAuthenticationStatus: PropTypes.func,
    actRequestProducts: PropTypes.func,
};
Header.defaultProps = {
    isLogginSucceed: false,
    verifyAuthenticationStatus: () => {},
    actRequestProducts: () => {},
};

const mapStateToProps = (state) => ({ ...state.authReducer });
const mapDispatchToProps = (dispatch) => ({
    verifyAuthenticationStatus: () =>
        dispatch(authAction.verifyAuthenticationStatus()),
    actRequestProducts: () => {
        dispatch(carAction.actRequestProducts());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
