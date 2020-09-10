import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core';
import PropTypes, { number, string } from 'prop-types';
import { connect } from 'react-redux';
import * as action from 'redux/actions/Action.GetCar';
import styles from './styles';

const PaginationBar = (props) => {
    const { classes, valueSearch, count } = props;
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        props.actRequestProductsSearch(valueSearch, page);
    };
    return (
        <div className={classes.root}>
            <Pagination
                page={page}
                count={count}
                color="primary"
                defaultPage={page}
                onChange={handleChange}
            />
        </div>
    );
};
PaginationBar.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.object),
    count: PropTypes.number,
    valueSearch: PropTypes.string,
    actRequestProductsSearch: PropTypes.func,
};
PaginationBar.defaultProps = {
    classes: [],
    count: number,
    valueSearch: string,
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
