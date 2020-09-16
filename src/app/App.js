import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Body, Footer } from 'components';
import globalTheme from 'config/constants/Themes';
import Routes from 'Routes';
import Wrapper from './styles';

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={globalTheme}>
                <Wrapper>
                    <Header />
                    <Body>
                        <Routes />
                    </Body>
                    <Footer />
                </Wrapper>
            </ThemeProvider>
        </Router>
    );
};

export default App;
