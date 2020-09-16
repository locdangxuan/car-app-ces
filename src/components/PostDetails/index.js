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
} from '@material-ui/icons';
import { Carousel } from 'components/common';
import action from 'redux/actions/Action.Post';
import useStyles from './styles';

const PostDetails = (props) => {
    useEffect(() => {
        props.fetchPostData(props.match.params.id);
    }, []);
    const { details } = props;
    const classes = useStyles();
    const { length } = Object.keys(details);
    if (length > 0) {
        const specifications = Object.keys(details.specs).map((element) => [
            element,
            details.specs[element],
        ]);
        return (
            <Grid container className={classes.globalContent}>
                <Grid item xs={12} className={`${classes.column}`}>
                    <Box
                        component="div"
                        className={`${classes.wrapper} ${classes.textCenter}`}
                    >
                        <Typography variant="h4" gutterBottom>
                            {details.name}
                        </Typography>
                    </Box>
                    <Box
                        component="div"
                        className={`${classes.wrapper} ${classes.carousel}`}
                    >
                        <Carousel images={details.images} />
                        <Box component="div" className={classes.info}>
                            <LocalTaxi />
                            <Box
                                component="span"
                                className={classes.textCenter}
                            >
                                {details.model}
                            </Box>
                            <CalendarToday className={classes.left} />
                            <Box
                                component="span"
                                className={classes.textCenter}
                            >
                                {details.year}
                            </Box>
                            <Explore className={classes.left} />
                            <Box
                                component="span"
                                className={classes.textCenter}
                            >
                                {details.distanceTraveled}
                            </Box>
                            <AttachMoney className={classes.left} />
                            <Box
                                component="span"
                                className={classes.textCenter}
                            >
                                {details.price.substring(1)}
                            </Box>
                        </Box>
                        <Box component="div" className={classes.specifications}>
                            <Typography
                                variant="subtitle1"
                                className={classes.specificationTitle}
                                gutterBottom
                            >
                                Specifications
                            </Typography>
                            {specifications.map((item) => {
                                return (
                                    <Box
                                        key={item}
                                        component="div"
                                        className={classes.specificationContent}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            className={classes.specificationKey}
                                        >
                                            {item[0]}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
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
