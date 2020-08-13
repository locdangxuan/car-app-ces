import React from 'react';
import { Modal } from 'components/common';
import { ThemeProvider } from 'styled-components';
import globalTheme from 'config/constants/Themes';
import StyledApp from './AppStyles';

const App = () => (
    <ThemeProvider theme={globalTheme}>
        <StyledApp>
            <Modal type="REGISTER" />
        </StyledApp>
    </ThemeProvider>
);

export default App;
