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
import { DirectionsCar, Speed, DateRange, Label } from '@material-ui/icons';
import PropTypes from 'prop-types';
import HANDLE_ERROR from 'config/messages/Messages.Content';
import styles from './styles';

const ContentCard = (props) => {
    const { classes, data } = props;
    const {
        root,
        media,
        menuItem,
        textCenter,
        price,
        viewDetails,
        btnView,
        icon,
        left,
        right,
        cardActionsWrapper,
    } = classes;
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
                <CardContent>
                    <Typography
                        gutterBottom
                        className={textCenter}
                        variant="h6"
                        component="h2"
                    >
                        {data.name}
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <MenuItem className={(menuItem, left)}>
                                <Label fontSize="small" className={icon} />
                                <Typography variant="inherit">
                                    {data.fuelType}
                                </Typography>
                            </MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={(menuItem, right)}>
                                <DirectionsCar
                                    fontSize="small"
                                    className={icon}
                                />
                                <Typography variant="inherit">
                                    {data.brand}
                                </Typography>
                            </MenuItem>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MenuItem className={(menuItem, left)}>
                                <DateRange fontSize="small" className={icon} />
                                <Typography variant="inherit">
                                    {data.year}
                                </Typography>
                            </MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={(menuItem, right)}>
                                <Speed fontSize="small" className={icon} />
                                <Typography variant="inherit">
                                    {data.distanceTraveled} Km
                                </Typography>
                            </MenuItem>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions className={cardActionsWrapper}>
                <Grid container>
                    <Grid item xs={6} className={price}>
                        <Typography variant="inherit">
                            {data.price} USD
                        </Typography>
                    </Grid>
                    <Grid item xs={6} className={viewDetails}>
                        <Button color="primary" className={btnView}>
                            View Details
                        </Button>
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
