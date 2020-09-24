/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    LocalTaxi,
    CalendarToday,
    Explore,
    AttachMoney,
    Room,
    LocalGasStation,
} from '@material-ui/icons';
import { Carousel } from 'components/common';
import action from 'redux/actions/Action.Post';
import variant from 'config/constants/Variant';
import component from 'config/constants/Components';
import Color from 'config/constants/Colors';
import utils from 'utils/utils';
import { StyledLink, useStyles } from './styles';

const PostDetails = (props) => {
    const { id } = props.match.params;
    useEffect(() => {
        props.fetchPostData(id);
    }, []);
    const { details } = props;
    const classes = useStyles();
    const { length } = Object.keys(details);
    if (length > 0) {
        const {
            name,
            images,
            model,
            year,
            price,
            fuelType,
            distanceTraveled,
            seller,
            specs,
            location,
        } = details;
        const specifications = Object.keys(specs).map((element) => [
            element,
            details.specs[element],
        ]);
        const { displayName } = utils.getProfile();
        return (
            <Grid container className={classes.globalContent}>
                <Grid item xs={9} className={`${classes.column}`}>
                    <Box
                        component={component.div}
                        className={`${classes.wrapper} ${classes.detailCar}`}
                    >
                        <Box
                            className={`${classes.wrapper} ${classes.overview}`}
                        >
                            <Box
                                component={component.div}
                                className={`${classes.wrapper} ${classes.name}`}
                            >
                                {name}
                            </Box>
                            <Carousel images={images} />
                            <Box
                                component={component.div}
                                className={classes.info}
                            >
                                <Box
                                    component={component.div}
                                    className={classes.textCenter}
                                >
                                    <LocalTaxi />
                                    {model}
                                </Box>
                                <Box
                                    component={component.div}
                                    className={classes.textCenter}
                                >
                                    <CalendarToday className={classes.left} />
                                    {year}
                                </Box>

                                <Box
                                    component={component.div}
                                    className={classes.textCenter}
                                >
                                    <Explore className={classes.left} />
                                    {distanceTraveled}
                                </Box>
                            </Box>
                            <Box
                                component={component.div}
                                className={classes.info}
                            >
                                <Box
                                    component={component.div}
                                    className={classes.textCenter}
                                >
                                    <AttachMoney />
                                    {price}
                                </Box>

                                <Box
                                    component={component.div}
                                    className={classes.textCenter}
                                >
                                    <LocalGasStation className={classes.left} />
                                    {fuelType}
                                </Box>
                                <Box
                                    component={component.div}
                                    className={classes.textCenter}
                                >
                                    <Room className={classes.left} />
                                    {location}
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            component={component.div}
                            className={`${classes.specifications} ${classes.wrapper}`}
                        >
                            <Box
                                className={`${classes.specificationTitle} ${classes.wrapper}`}
                            >
                                Specifications
                            </Box>
                            <Box
                                component={component.div}
                                className={classes.specificationDetails}
                            >
                                {specifications.map((item) => {
                                    return (
                                        <Box
                                            key={item}
                                            component={component.div}
                                            className={
                                                classes.specificationContent
                                            }
                                        >
                                            <Typography
                                                variant={variant.subtitle1}
                                                className={
                                                    classes.specificationKey
                                                }
                                            >
                                                {item[0]}
                                            </Typography>
                                            <Typography
                                                variant={variant.subtitle1}
                                                className={
                                                    classes.specificationValue
                                                }
                                            >
                                                {item[1]}
                                            </Typography>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box component={component.div} className={classes.wrapper}>
                        <Typography
                            variant={variant.subtitle1}
                            className={classes.specificationValue}
                        >
                            {seller}
                        </Typography>
                        {displayName === seller && (
                            <StyledLink to={`/posts/update/${id}`}>
                                <Button
                                    variant={variant.contained}
                                    color={Color.primary}
                                >
                                    Update post
                                </Button>
                            </StyledLink>
                        )}
                    </Box>
                </Grid>
            </Grid>
        );
    }
    return null;
};
const mapStateToProps = (state) => {
    return {
        details: state.postReducer.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostData: (id) => {
            dispatch(action.fetchPostData(id));
        },
    };
};

PostDetails.propTypes = {
    details: PropTypes.object,
    fetchPostData: PropTypes.func,
};

PostDetails.defaultProps = {
    details: {},
    fetchPostData: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
