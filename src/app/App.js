/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Body, Footer, LayoutHomepage, SearchBar } from 'components';
import globalTheme from 'config/constants/Themes';
import PostCreating from 'pages/CreatePost/createPost';

const App = () => {
    return (
        <ThemeProvider theme={globalTheme}>
            <Header />
            <Body>
                <SearchBar />
                <LayoutHomepage />
            </Body>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
