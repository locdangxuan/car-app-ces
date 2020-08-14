import React from 'react';
import Images from 'config/constants/Images';
import { Image, Button, Icon } from 'components/common';

import Categories from 'components/common/Categories';
import { HeaderWrapper, GridHeader } from './Header';

const Header = () => {
    return (
        <HeaderWrapper>
            <GridHeader container spacing={2}>
                <GridHeader item xs={2}>
                    <Image src={Images.LogoHeader} alt="logo-header" />
                </GridHeader>
                <GridHeader item xs={7}>
                    <Categories />
                </GridHeader>
                <GridHeader item xs={3}>
                    <Button>
                        <Icon src={Images.LoginIcon} alt="login-icon" />
                        Login
                    </Button>
                    <Button>
                        <Icon src={Images.SignupIcon} alt="signup-icon" />
                        Signup
                    </Button>
                </GridHeader>
            </GridHeader>
        </HeaderWrapper>
    );
};

export default Header;
