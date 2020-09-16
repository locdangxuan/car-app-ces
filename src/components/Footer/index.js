import React from 'react';
import { Span } from 'components/common';
import { Twitter, Facebook, YouTube } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import { FooterWrapper, useStyles } from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <FooterWrapper>
            <Grid container className={classes.wrapper}>
                <Grid item xs={10} className={classes.copyright}>
                    <Span>
                        Code Engine Studio, Final Thesis Summer Internship
                    </Span>
                </Grid>
                <Grid item xs={2} className={classes.socialIcons}>
                    <Twitter className={classes.styleSocialIcon} />
                    <Facebook className={classes.styleSocialIcon} />
                    <YouTube className={classes.styleSocialIcon} />
                </Grid>
            </Grid>
        </FooterWrapper>
    );
};

export default Footer;
