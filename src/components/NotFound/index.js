import React from 'react';
import { Span } from 'components/common';
import color from 'config/constants/Colors';
import { ThemeProvider } from 'styled-components';
import style from './NotFound';

const NotFound = () => {
    const theme = {
        span: {
            color: color.white,
        },
    };
    return (
        <ThemeProvider theme={theme}>
            <style.wrapper>
                <style.body>
                    <Span>404 Not Found</Span>
                    <Span>
                        Sorry! The page you are looking for cannot be found.
                        Please use the provided search box to find what you are
                        looking for, click on our top navigational menu
                    </Span>
                </style.body>
            </style.wrapper>
        </ThemeProvider>
    );
};

export default NotFound;
