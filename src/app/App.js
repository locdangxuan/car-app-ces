import React from 'react';
import { ThemeProvider } from 'styled-components';
import globalTheme from 'config/constants/Themes';
import StyledApp from './AppStyles';

const App = () => (
    <ThemeProvider theme={globalTheme}>
        <StyledApp>alo</StyledApp>
    </ThemeProvider>
);

export default App;
