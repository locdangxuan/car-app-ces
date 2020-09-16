import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { LocalTaxi, CalendarToday, Explore } from '@material-ui/icons';
import { Carousel } from 'components/common';
import dataDetailsDefault from 'config/sampleData/details';
import useStyles from './styles';

const data = { ...dataDetailsDefault };

const PostDetails = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.globalContent}>
            <Grid
                item
                xs={9}
                className={`${classes.column} ${classes.carInfo}`}
            >
                <Box component="div" className={classes.titleWrapper}>
                    <Typography variant="h4" gutterBottom>
                        {data.name}
                    </Typography>
                </Box>
                <Box component="div" className={classes.titleWrapper}>
                    <Carousel />
                    <Box component="div" className={classes.info}>
                        <LocalTaxi />
                        <Box component="span" className={classes.textCenter}>
                            {data.model}
                        </Box>
                        <CalendarToday className={classes.left} />
                        <Box component="span" className={classes.textCenter}>
                            {data.yearOfIssue}
                        </Box>
                        <Explore className={classes.left} />
                        <Box component="span" className={classes.textCenter}>
                            {data.mileage}
                        </Box>
                    </Box>
                    <Box component="div" className={classes.description}>
                        <p className={classes.descriptionText}>
                            {data.overview}
                        </p>
                    </Box>
                </Box>
                <Box component="div" className={classes.specification}>
                    <Typography variant="subtitle1" gutterBottom>
                        Specification
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={3} className={classes.column}>
                <Box component="div">Sidebar right</Box>
            </Grid>
        </Grid>
    );
};

export default PostDetails;
