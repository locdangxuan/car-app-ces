import React from 'react';
import Modal from 'components/uncommon/Modal/index';
import { ThemeProvider } from 'styled-components';
import globalTheme from 'config/constants/Themes';

const App = () => (
    <ThemeProvider theme={globalTheme}>
        <Modal type="REGISTER" />
    </ThemeProvider>
);

export default App;
