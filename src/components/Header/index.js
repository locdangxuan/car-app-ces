import React from 'react';
import Images from 'config/constants/Images';
import { Image, UnAuthenticated, Authenticated } from 'components/common';
import Categories from 'components/common/Categories';
import dataHeaderDefault from 'config/sampleData/header';
import { makeStyles, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HeaderWrapper, GridHeader } from './Header';

const src = {
    LogoHeader: Images.LogoHeader
        ? Images.LogoHeader
        : dataHeaderDefault.LogoHeader,
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
});

const Header = (props) => {
    const classes = useStyles();
    const { isLogginSucceed } = props;
    return (
        <Box component="div">
            <HeaderWrapper>
                <GridHeader
                    container
                    className={classes.headerContainer}
                    spacing={2}
                >
                    <GridHeader item xs={2}>
                        <Image src={src.LogoHeader} alt="logo-header" />
                    </GridHeader>
                    <GridHeader item xs={7}>
                        <Categories />
                    </GridHeader>
                    <GridHeader item xs={3}>
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
};
Header.defaultProps = {
    isLogginSucceed: false,
};

const mapStateToProps = (state) => ({ ...state.authReducer });

export default connect(mapStateToProps)(Header);
