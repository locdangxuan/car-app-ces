import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LocationPicker } from 'components/common';
import { ContactPanel } from 'components';
import { Wrapper, theme } from './styles';

const Contact = () => {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <ContactPanel />
                <LocationPicker />
            </Wrapper>
        </ThemeProvider>
    );
};

export default Contact;
