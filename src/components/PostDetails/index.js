/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
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
import useStyles from './styles';

const PostDetails = (props) => {
    useEffect(() => {
        props.fetchPostData(props.match.params.id);
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
        } = details;
        const specifications = Object.keys(specs).map((element) => [
            element,
            details.specs[element],
        ]);
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
                                className={`${classes.wrapper} ${classes.textCenter} ${classes.name}`}
                            >
                                {name}
                            </Box>
                            <Carousel images={images} />
                            <Box
                                component={component.div}
                                className={classes.info}
                            >
                                <LocalTaxi />
                                <Box
                                    component={component.span}
                                    className={classes.textCenter}
                                >
                                    {model}
                                </Box>
                                <CalendarToday className={classes.left} />
                                <Box
                                    component={component.span}
                                    className={classes.textCenter}
                                >
                                    {year}
                                </Box>
                                <Explore className={classes.left} />
                                <Box
                                    component={component.span}
                                    className={classes.textCenter}
                                >
                                    {distanceTraveled}
                                </Box>
                                <AttachMoney className={classes.left} />
                                <Box
                                    component={component.span}
                                    className={classes.textCenter}
                                >
                                    {price}
                                </Box>
                                <LocalGasStation className={classes.left} />
                                <Box
                                    component={component.span}
                                    className={classes.textCenter}
                                >
                                    {fuelType}
                                </Box>
                                <Room className={classes.left} />
                                <Box
                                    component={component.span}
                                    className={classes.textCenter}
                                >
                                    USA
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
                    <Box className={classes.wrapper}>{seller}</Box>
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
    fetchPostData: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
