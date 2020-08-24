import React, { useState } from 'react';
import Images from 'config/constants/Images';
import { Modal, Image, Button, Icon } from 'components/common';
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
    const [loginF, setLoginF] = useState(false);
    const [registerF, setRegisterF] = useState(false);
    const toggleLogin = () => {
        setLoginF(!loginF);
    };
    const toggleRegister = () => {
        setRegisterF(!registerF);
    };
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
                    <Button onClick={toggleLogin}>
                        <Icon src={src.LoginIcon} alt="login-icon" />
                        Login
                    </Button>
                    <Button onClick={toggleRegister}>
                        <Icon src={src.SignUpIcon} alt="signup-icon" />
                        Signup
                    </Button>
                    {registerF === true && (
                        <Modal type="REGISTER" handlerToggle={toggleRegister} />
                    )}
                    {loginF === true && (
                        <Modal type="LOGIN" handlerToggle={toggleLogin} />
                    )}
                </GridHeader>
            </GridHeader>
        </HeaderWrapper>
    );
};

export default Header;
