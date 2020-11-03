import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from 'styled-components';
import { Box } from '@material-ui/core';
import variant from 'config/constants/Variant';
import { Wrapper, Body, StyledSpan, theme, useStyles } from './styles';

const ContactPanel = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Body>
                    <Typography variant={variant.h2}>Contact Us</Typography>
                    <StyledSpan>
                        While we are good with smoke signals, there are simpler{' '}
                        ways for us to get in touch and answer your questions.
                    </StyledSpan>
                    <Box className={classes.Box}>
                        <StyledSpan>
                            <Typography variant={variant.h6}>
                                Dang Xuan Loc
                            </Typography>
                            <Typography variant={variant.h6}>
                                Facebook:{' '}
                                <a
                                    target="_blank"
                                    href="https://facebook.com/Loc.3i"
                                    rel="noopener noreferrer"
                                >
                                    here
                                </a>
                            </Typography>
                            <Typography variant={variant.h6}>
                                Email: xuanloc20041998@gmail.com
                            </Typography>
                        </StyledSpan>
                        <StyledSpan>
                            <Typography variant={variant.h6}>
                                Nguyen Tran Hau
                            </Typography>
                            <Typography variant={variant.h6}>
                                Facebook:{' '}
                                <a
                                    target="_blank"
                                    href="https://facebook.com/haauj"
                                    rel="noopener noreferrer"
                                >
                                    here
                                </a>
                            </Typography>
                            <Typography variant={variant.h6}>
                                Email: nguyentranhau98@gmail.com
                            </Typography>
                        </StyledSpan>
                    </Box>
                </Body>
            </Wrapper>
        </ThemeProvider>
    );
};

export default ContactPanel;
