import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    MenuItem,
    Grid,
    withStyles,
} from '@material-ui/core';
import {
    DirectionsCar,
    DirectionsBike,
    DateRange,
    Label,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import HANDLE_ERROR from 'config/messages/Content.Message';
import styles from './styles';

const ContentCard = (props) => {
    const { classes, data } = props;
    const { root, media, menuItem, nameContent } = classes;
    if (Object.values(data).length === 0) {
        return HANDLE_ERROR;
    }
    return (
        <Card className={root}>
            <CardActionArea>
                <CardMedia
                    className={media}
                    image={data.thumbnail}
                    title="Contemplative Reptile"
                />
                <CardContent className={nameContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.brand}
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <MenuItem className={menuItem}>
                                <Label fontSize="small" />
                                <Typography variant="inherit">
                                    {data.fuelType}
                                </Typography>
                            </MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={menuItem}>
                                <DirectionsCar fontSize="small" />
                                <Typography variant="inherit">
                                    {data.name}
                                </Typography>
                            </MenuItem>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <MenuItem className={menuItem}>
                                <DateRange fontSize="small" />
                                <Typography variant="inherit">
                                    {data.year}
                                </Typography>
                            </MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={menuItem}>
                                <DirectionsBike fontSize="small" />
                                <Typography variant="inherit">
                                    {data.distanceTraveled} Km
                                </Typography>
                            </MenuItem>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Typography variant="inherit">
                            {data.price} USD
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button size="small">View Listing</Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
};
ContentCard.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.objectOf(PropTypes.object),
};
ContentCard.defaultProps = {
    classes: [],
    data: {},
};

export default withStyles(styles)(ContentCard);
