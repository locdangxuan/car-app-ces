import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Span } from 'components/common';
import { Twitter, Facebook, YouTube } from '@material-ui/icons';
import { ThemeProvider } from 'styled-components';
import { Grid } from '@material-ui/core';
import { FooterWrapper } from './Footer';

const useStyles = makeStyles(() => ({
    copyright: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerSpan: {
        margin: '0',
    },
    wrapper: {
        margin: '0',
        width: '100%',
    },
    socialIcons: {
        display: 'flex',
        justifyContent: 'center',
    },
    styleSocialIcon: {
        marginRight: '10px',
    },
}));

const Footer = () => {
    const classes = useStyles();
    const theme = {
        span: {
            margin: 'unset',
        },
    };
    return (
        <FooterWrapper>
            <Grid container spacing={3} className={classes.wrapper}>
                <Grid item xs={9}>
                    <ThemeProvider theme={theme}>
                        <Span>
                            Code Engine Studio, Final Thesis Summer Internship
                        </Span>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={3} className={classes.socialIcons}>
                    <Twitter className={classes.styleSocialIcon} />
                    <Facebook className={classes.styleSocialIcon} />
                    <YouTube className={classes.styleSocialIcon} />
                </Grid>
            </Grid>
        </FooterWrapper>
    );
};

export default Footer;
