import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from 'components';
import { Modal, Button } from 'components/common';
import globalTheme from 'config/constants/Themes';
import StyledApp from './AppStyles';

const App = () => {
    /* Example of using modal */
    const [loginF, setLoginF] = useState(false);
    const [registerF, setRegisterF] = useState(false);
    const toggleLogin = () => {
        setLoginF(!loginF);
    };
    const toggleRegister = () => {
        setRegisterF(!registerF);
    };
    return (
        <ThemeProvider theme={globalTheme}>
            <StyledApp>
                <Header />
                <Button onClick={toggleLogin} />
                <Button onClick={toggleRegister} />
                {registerF === true && (
                    <Modal type="REGISTER" handlerToggle={toggleRegister} />
                )}
                {loginF === true && (
                    <Modal type="LOGIN" handlerToggle={toggleLogin} />
                )}
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
