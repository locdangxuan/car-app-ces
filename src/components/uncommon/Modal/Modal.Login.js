import React from 'react';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { success, danger } from 'config/constants/Colors';
import { ThemeProvider } from 'styled-components';
import { Wrapper, Content, Header, Footer, Body } from './Modal.Styles';

const LoginForm = (
    <Wrapper>
        <Content>
            <Header>LOGIN</Header>
            <Body>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
            </Body>
            <Footer>
                <ThemeProvider theme={{ onActiveBorderColor: success }}>
                    <Button>Login</Button>
                </ThemeProvider>
                <ThemeProvider theme={{ onActiveBorderColor: danger }}>
                    <Button>Cancel</Button>
                </ThemeProvider>
            </Footer>
        </Content>
    </Wrapper>
);

export default LoginForm;
