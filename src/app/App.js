import React from 'react';
import { ThemeProvider } from 'styled-components';
import globalTheme from 'config/constants/Themes';
import SearchBar from 'components/SearchBar';
import StyledApp from './AppStyles';
import LayoutHomepage from '../components/Layout-homepage/LayoutHomepage';

const App = () => {
    return (
        <ThemeProvider theme={globalTheme}>
            <StyledApp>
                <LayoutHomepage />
                <SearchBar />
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
