/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Body, Footer, LayoutHomepage, SearchBar } from 'components';
import globalTheme from 'config/constants/Themes';
import UpdatePost from 'pages/UpdatePost';

const App = () => {
    return (
        <ThemeProvider theme={globalTheme}>
            <Header />
            <Body>
                <UpdatePost />
            </Body>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
