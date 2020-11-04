import React from 'react';
import { Span } from 'components/common';
import { Twitter, Facebook, YouTube } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import { FooterWrapper, useStyles, SocialNetworkLink } from './styles';

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
                    <SocialNetworkLink
                        target="_blank"
                        href="https://twitter.com"
                        rel="noopener noreferrer"
                    >
                        <Twitter className={classes.styleSocialIcon} />
                    </SocialNetworkLink>
                    <SocialNetworkLink
                        target="_blank"
                        href="https://www.facebook.com/nguyen.h.phat.1"
                        rel="noopener noreferrer"
                    >
                        <Facebook className={classes.styleSocialIcon} />
                    </SocialNetworkLink>
                    <SocialNetworkLink
                        target="_blank"
                        href="https://www.youtube.com"
                        rel="noopener noreferrer"
                    >
                        <YouTube className={classes.styleSocialIcon} />
                    </SocialNetworkLink>
                </Grid>
            </Grid>
        </FooterWrapper>
    );
};

export default Footer;
