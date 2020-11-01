/* eslint-disable react/forbid-prop-types */
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
    Box,
} from '@material-ui/core';
import { DirectionsCar, Speed, DateRange, Label } from '@material-ui/icons';
import PropTypes from 'prop-types';
import HANDLE_ERROR from 'config/messages/Messages.Content';
import Color from 'config/constants/Colors';
import variant from 'config/constants/Variant';
import Component from 'config/constants/Components';
import { fontSize } from 'config/constants/Fonts';
import { useStyles, StyledLink } from './styles';

const ContentCard = (props) => {
    const { data } = props;
    const classes = useStyles();
    const {
        root,
        media,
        menuItem,
        textCenter,
        priceOfCar,
        viewDetails,
        btnView,
        icon,
        left,
        right,
        cardActionsWrapper,
    } = classes;
    const {
        thumbnail,
        name,
        fuelType,
        brand,
        year,
        distanceTraveled,
        price,
        id,
        editable,
    } = data;
    if (Object.values(data).length === 0) {
        return HANDLE_ERROR;
    }
    return (
        <Card className={root}>
            <StyledLink to={`/posts/${id}`}>
                <CardActionArea>
                    <CardMedia className={media} image={thumbnail} />
                    <CardContent>
                        <Typography
                            gutterBottom
                            className={textCenter}
                            variant={variant.h6}
                        >
                            {name}
                        </Typography>
                        <Grid container>
                            <Grid item xs={6}>
                                <MenuItem className={(menuItem, left)}>
                                    <Label
                                        fontSize={fontSize.small}
                                        className={icon}
                                    />
                                    <Typography>{fuelType}</Typography>
                                </MenuItem>
                            </Grid>
                            <Grid item xs={6}>
                                <MenuItem className={(menuItem, right)}>
                                    <DirectionsCar
                                        fontSize={fontSize.small}
                                        className={icon}
                                    />
                                    <Typography>{brand}</Typography>
                                </MenuItem>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6}>
                                <MenuItem className={(menuItem, left)}>
                                    <DateRange
                                        fontSize={fontSize.small}
                                        className={icon}
                                    />
                                    <Typography>{year}</Typography>
                                </MenuItem>
                            </Grid>
                            <Grid item xs={6}>
                                <MenuItem className={(menuItem, right)}>
                                    <Speed
                                        fontSize={fontSize.small}
                                        className={icon}
                                    />
                                    <Typography>
                                        {parseInt(
                                            distanceTraveled,
                                            10
                                        ).toLocaleString()}{' '}
                                        Km
                                    </Typography>
                                </MenuItem>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <CardActions className={cardActionsWrapper}>
                    <Grid container>
                        <Grid item xs={6} className={priceOfCar}>
                            <Typography>
                                {parseInt(price.toLocaleString(), 10)} USD
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={viewDetails}>
                            <Button color={Color.primary} className={btnView}>
                                View Details
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </StyledLink>
            {editable && (
                <StyledLink to={`/posts/update/${id}`}>
                    <Box component={Component.div} className={classes.edit}>
                        Edit
                    </Box>
                </StyledLink>
            )}
        </Card>
    );
};
ContentCard.propTypes = {
    data: PropTypes.object,
};
ContentCard.defaultProps = {
    data: {},
};

export default ContentCard;
