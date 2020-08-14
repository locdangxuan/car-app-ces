import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from 'components';
import globalTheme from 'config/constants/Themes';
import StyledApp from './AppStyles';

const App = () => (
    <ThemeProvider theme={globalTheme}>
        <StyledApp>
            <Header />
        </StyledApp>
    </ThemeProvider>
);

export default App;
