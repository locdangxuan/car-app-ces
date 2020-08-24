import React from 'react';
import Images from 'config/constants/Images';
import { Image, Button, Icon } from 'components/common';
import Categories from 'components/common/Categories';
import dataHeaderDefault from 'config/sampleData/header';
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

const Header = () => {
    return (
        <HeaderWrapper>
            <GridHeader container spacing={2}>
                <GridHeader item xs={2}>
                    <Image src={src.LogoHeader} alt="logo-header" />
                </GridHeader>
                <GridHeader item xs={7}>
                    <Categories />
                </GridHeader>
                <GridHeader item xs={3}>
                    <Button>
                        <Icon src={src.LoginIcon} alt="login-icon" />
                        Login
                    </Button>
                    <Button>
                        <Icon src={src.SignUpIcon} alt="signup-icon" />
                        Signup
                    </Button>
                </GridHeader>
            </GridHeader>
        </HeaderWrapper>
    );
};

export default Header;
