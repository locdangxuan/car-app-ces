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
import action from 'redux/actions/Action.Auth';
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
    return (
        <Box component="div">
            <HeaderWrapper>
                <GridHeader
                    container
                    className={classes.headerContainer}
                    spacing={2}
                >
                    <GridHeader item xs={2}>
                        <Link to="/">
                            <Image src={src.LogoHeader} alt="logo-header" />
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
};
Header.defaultProps = {
    isLogginSucceed: false,
    verifyAuthenticationStatus: {},
};

const mapStateToProps = (state) => ({ ...state.authReducer });
const mapDispatchToProps = (dispatch) => ({
    verifyAuthenticationStatus: () =>
        dispatch(action.verifyAuthenticationStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
