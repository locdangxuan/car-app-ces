import React from 'react';
import Images from 'config/constants/Images';
import {
    Image,
    UnAuthenticated,
    //  Authenticated
} from 'components/common';
import Categories from 'components/common/Categories';
import dataHeaderDefault from 'config/sampleData/header';
import { makeStyles, Box } from '@material-ui/core';
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

const Header = () => {
    const classes = useStyles();
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
                        <UnAuthenticated />
                        {/* <Authenticated /> */}
                    </GridHeader>
                </GridHeader>
            </HeaderWrapper>
        </Box>
    );
};

export default Header;
