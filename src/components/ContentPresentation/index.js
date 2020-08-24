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
import {
    dataDefault,
    VARIANT,
    FONTSIZE,
    TITLE_CARD,
} from 'config/sampleData/contentPresentation';
import styles from './styles';

const ContentCard = (props) => {
    const { classes, data } = props;
    const { root, media, menuItem, nameContent } = classes;
    if (Object.values(data).length === 0) {
        return '';
    }
    const {
        thumbnail = dataDefault.thumbnail,
        brand = dataDefault.brand,
        fuelType = dataDefault.fuelType,
        name = dataDefault.name,
        year = dataDefault.year,
        distanceTraveled = dataDefault.distanceTraveled,
        price = dataDefault.price,
    } = data;
    return (
        <Card className={root}>
            <CardActionArea>
                <CardMedia
                    className={media}
                    image={thumbnail}
                    title={TITLE_CARD}
                />
                <CardContent className={nameContent}>
                    <Typography gutterBottom>{brand}</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <MenuItem className={menuItem}>
                                <Label fontSize={FONTSIZE} />
                                <Typography variant={VARIANT}>
                                    {fuelType}
                                </Typography>
                            </MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={menuItem}>
                                <DirectionsCar fontSize={FONTSIZE} />
                                <Typography variant={VARIANT}>
                                    {name}
                                </Typography>
                            </MenuItem>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <MenuItem className={menuItem}>
                                <DateRange fontSize={FONTSIZE} />
                                <Typography variant={VARIANT}>
                                    {year}
                                </Typography>
                            </MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={menuItem}>
                                <DirectionsBike fontSize={FONTSIZE} />
                                <Typography variant={VARIANT}>
                                    {distanceTraveled} Km
                                </Typography>
                            </MenuItem>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Typography variant={VARIANT}>{price} USD</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button size={FONTSIZE}>View Listing</Button>
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
