import React from 'react';
import { ThemeProvider } from 'styled-components';
import globalTheme from 'config/constants/Themes';
import StyledApp from './AppStyles';
import LayoutHomepage from './../components/Layout-homepage/LayoutHomepage'
const App = () => {
    return (
        <ThemeProvider theme={globalTheme}>
            <StyledApp>
                <LayoutHomepage />
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
