import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from 'styled-components';
import { Wrapper, Body, StyledLink, StyledSpan, theme } from './styles';

const NotFound = () => {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Body>
                    <Typography variant="h2">404 Not Found</Typography>
                    <StyledSpan>
                        Sorry! The page you are looking for cannot be found.
                        Click on our top navigational menu or{' '}
                        <StyledLink to="/">here</StyledLink> to get back to
                        homepage.
                    </StyledSpan>
                </Body>
            </Wrapper>
        </ThemeProvider>
    );
};

export default NotFound;
