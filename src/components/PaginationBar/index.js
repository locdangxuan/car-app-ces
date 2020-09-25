/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as action from 'redux/actions/Action.GetCar';
import Color from 'config/constants/Colors';
import styles from './styles';

const PaginationBar = (props) => {
    const { classes, valueSearch, count } = props;
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        props.actRequestProductsSearch(valueSearch, page);
    };
    return (
        <Pagination
            className={classes.root}
            page={page}
            count={count}
            color={Color.primary}
            defaultPage={page}
            onChange={handleChange}
        />
    );
};
PaginationBar.propTypes = {
    classes: PropTypes.object,
    count: PropTypes.number,
    valueSearch: PropTypes.string,
    actRequestProductsSearch: PropTypes.func,
};
PaginationBar.defaultProps = {
    classes: {},
    count: 1,
    valueSearch: '',
    actRequestProductsSearch: {},
};
const mapStateToProp = () => {
    return {};
};
const MapDispatchToProps = (dispatch) => {
    return {
        actRequestProductsSearch: (value, page) => {
            dispatch(action.actRequestProductsSearch(value, page));
        },
    };
};
export default connect(
    mapStateToProp,
    MapDispatchToProps
)(withStyles(styles)(PaginationBar));
