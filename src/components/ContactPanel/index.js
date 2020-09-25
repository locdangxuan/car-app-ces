import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from 'styled-components';
import { Box } from '@material-ui/core';
import { Wrapper, Body, StyledSpan, theme, useStyles } from './styles';

const ContactPanel = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Body>
                    <Typography variant="h2">Contact Us</Typography>
                    <StyledSpan>
                        While we are good with smoke signals, there are simpler{' '}
                        ways for us to get in touch and answer your questions.
                    </StyledSpan>
                    <Box className={classes.Box}>
                        <StyledSpan>
                            <Typography variant="h6">Dang Xuan Loc</Typography>
                            <Typography variant="h6">Facebook: </Typography>
                            <Typography variant="h6">Email: </Typography>
                        </StyledSpan>
                        <StyledSpan>
                            <Typography variant="h6">Dang Xuan Loc</Typography>
                            <Typography variant="h6">Facebook: </Typography>
                            <Typography variant="h6">Email: </Typography>
                        </StyledSpan>
                        <StyledSpan>
                            <Typography variant="h6">Dang Xuan Loc</Typography>
                            <Typography variant="h6">Facebook: </Typography>
                            <Typography variant="h6">Email: </Typography>
                        </StyledSpan>
                    </Box>
                </Body>
            </Wrapper>
        </ThemeProvider>
    );
};

export default ContactPanel;
