import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from 'styled-components';
import variant from 'config/constants/Variant';
import { Wrapper, Body, StyledLink, StyledSpan, theme } from './styles';

const RequireLogin = () => {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Body>
                    <Typography variant={variant.h2}>
                        400 Unauthenticated
                    </Typography>
                    <StyledSpan>
                        Sorry! You need to be authenticated to use this feature.
                        Please login or <StyledLink to="/">here</StyledLink> to
                        get back to homepage.
                    </StyledSpan>
                </Body>
            </Wrapper>
        </ThemeProvider>
    );
};

export default RequireLogin;
