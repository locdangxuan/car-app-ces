import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Body, Footer, LayoutHomepage, SearchBar } from 'components';
import globalTheme from 'config/constants/Themes';

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
