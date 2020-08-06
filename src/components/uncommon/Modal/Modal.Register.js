import React from 'react';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { success, danger } from 'config/constants/Colors';
import { ThemeProvider } from 'styled-components';
import { Wrapper, Content, Header, Footer, Body } from './Modal.Styles';

const RegisterForm = (
    <Wrapper>
        <Content>
            <Header>REGISTER</Header>
            <Body>
                <Input type="text" placeholder="Username" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Type your password again" />
            </Body>
            <Footer>
                <ThemeProvider theme={{ onActiveBorderColor: success }}>
                    <Button>Register</Button>
                </ThemeProvider>
                <ThemeProvider theme={{ onActiveBorderColor: danger }}>
                    <Button>Cancel</Button>
                </ThemeProvider>
            </Footer>
        </Content>
    </Wrapper>
);

export default RegisterForm;
