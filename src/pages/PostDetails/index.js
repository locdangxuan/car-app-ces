/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
    Grid,
    Box,
    Typography,
    Button,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    LocalTaxi,
    CalendarToday,
    Explore,
    AttachMoney,
    Room,
    LocalGasStation,
    Person,
    Email,
    ContactPhone,
} from '@material-ui/icons';
import { ToggleButtonGroup } from '@material-ui/lab';
import { Carousel } from 'components/common';
import { ReviewsLayout } from 'components';
import action from 'redux/actions/Action.Post';
import variant from 'config/constants/Variant';
import component from 'config/constants/Components';
import Color from 'config/constants/Colors';
import utils from 'utils/utils';
import { formUtilConstant } from 'config/constants/Utils';
import { StyledLink, useStyles, StyledToggleButton } from './styles';

const listNavigationDetails = ['specifications', 'reviews', 'other feature'];

const PostDetails = (props) => {
    const [alignment, setAlignment] = useState('specifications');
    const [title, setTitle] = useState('specifications');
    const { details } = props;
    const onClickCategory = (event, value) => {
        setTitle(value);
    };
    const onChangeNavigation = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const { id } = props.match.params;
    useEffect(() => {
        props.fetchPostData(id);
    }, []);
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
            email,
            phone,
            specs,
            location,
            editable,
            information,
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
                                    <LocalTaxi className={classes.first} />
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
                                    <AttachMoney className={classes.first} />
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
                                    {utils.getLocationString(location)}
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            component={component.div}
                            className={`${classes.wrapper}`}
                        >
                            <Box
                                component={component.div}
                                className={classes.navigations}
                            >
                                <ToggleButtonGroup
                                    value={alignment}
                                    exclusive
                                    onChange={onChangeNavigation}
                                >
                                    {listNavigationDetails.map((item) => (
                                        <StyledToggleButton
                                            key={item}
                                            className={`${classes.navigationButton}`}
                                            value={item}
                                            onClick={onClickCategory}
                                        >
                                            {item}
                                        </StyledToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </Box>
                            {title === 'specifications' && (
                                <Box>
                                    <Box
                                        className={`${classes.title} ${classes.wrapper}`}
                                    >
                                        Specifications
                                    </Box>
                                    <Box
                                        component={component.div}
                                        className={classes.specificationDetails}
                                    >
                                        <TableContainer>
                                            <Table className={classes.table}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            className={`${classes.tableColor} ${classes.tableHead}`}
                                                            align="center"
                                                        >
                                                            Specs
                                                        </TableCell>
                                                        <TableCell
                                                            className={`${classes.tableColor} ${classes.tableHead}`}
                                                            align="center"
                                                        >
                                                            Value
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {specifications.map(
                                                        (item) => {
                                                            return (
                                                                <TableRow
                                                                    key={item}
                                                                >
                                                                    <TableCell
                                                                        className={
                                                                            classes.tableColor
                                                                        }
                                                                        component={
                                                                            component.th
                                                                        }
                                                                        scope="row"
                                                                        align="center"
                                                                    >
                                                                        {item[0].replace(
                                                                            /:/,
                                                                            ''
                                                                        )}
                                                                    </TableCell>
                                                                    <TableCell
                                                                        align="center"
                                                                        className={
                                                                            classes.tableColor
                                                                        }
                                                                    >
                                                                        {
                                                                            item[1]
                                                                        }
                                                                    </TableCell>
                                                                </TableRow>
                                                            );
                                                        }
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                </Box>
                            )}
                            {title === 'reviews' && (
                                <Box>
                                    <Box
                                        className={`${classes.title} ${classes.wrapper}`}
                                    >
                                        Reviews
                                    </Box>
                                    <Box
                                        component={component.div}
                                        className={classes.specificationDetails}
                                    >
                                        <ReviewsLayout id={id} />
                                    </Box>
                                </Box>
                            )}
                            {title === 'other feature' && (
                                <Box className={classes.otherFeatures}>
                                    {information[
                                        formUtilConstant.otherFeatures
                                    ].map((feature) => (
                                        <Box className={classes.feature}>
                                            {' '}
                                            {feature}{' '}
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box
                        component={component.div}
                        className={` ${classes.wrapper} ${classes.sellerInfo}`}
                    >
                        <Typography
                            variant={variant.subtitle1}
                            className={classes.specificationValue}
                        >
                            <Person classNmae={classes.iconPersonInfo} />
                            <Typography className={classes.infoSeller}>
                                {seller}
                            </Typography>
                        </Typography>
                        <Typography
                            variant={variant.subtitle1}
                            className={classes.specificationValue}
                        >
                            <Email classNmae={classes.iconPersonInfo} />
                            <Typography className={classes.infoSeller}>
                                {email}
                            </Typography>
                        </Typography>
                        <Typography
                            variant={variant.subtitle1}
                            className={classes.specificationValue}
                        >
                            <ContactPhone classNmae={classes.iconPersonInfo} />
                            <Typography className={classes.infoSeller}>
                                {phone}
                            </Typography>
                        </Typography>
                        {editable && (
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
        pending: state.postReducer.pending,
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
