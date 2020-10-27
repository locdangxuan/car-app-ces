/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { withStyles, Grid, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ContentCard, Loader } from 'components/common';
import * as action from 'redux/actions/Action.GetCar';
import PaginationBar from 'components/PaginationBar';
import utils from 'utils/utils';
import Component from 'config/constants/Components';
import styles from './styles';

const SearchResults = (props) => {
    const { id } = utils.getProfile();
    const ShowContent = (Contents, classes) => {
        if (Contents) {
            return Contents.map((Content) => {
                return (
                    <Grid
                        item
                        xs={4}
                        key={Content.id}
                        className={classes.content}
                    >
                        <ContentCard data={Content} />
                    </Grid>
                );
            });
        }
        return null;
    };
    const { classes, Contents, orderBy } = props;
    const { pagination, pending, products } = Contents;
    const contentsLength = Object.keys(Contents).length;
    const paginationLength = Object.keys(pagination).length;
    useEffect(() => {
        if (orderBy === 'user')
            props.actRequestProductsSearch('user', id.toString());
        else props.actRequestProducts();
    }, []);
    return (
        <Box component={Component.div} className={classes.contentCarWrapper}>
            {pending && <Loader type="FULL-PAGE">Searching</Loader>}
            {contentsLength > 0 && (
                <Grid container className={classes.layoutWrapper}>
                    {ShowContent(products, classes)}
                </Grid>
            )}
            {paginationLength > 0 && (
                <PaginationBar
                    orderBy={pagination.orderBy}
                    count={pagination.lastPage}
                    valueSearch={pagination.value}
                    className={classes.paginationBar}
                />
            )}
        </Box>
    );
};

SearchResults.propTypes = {
    classes: PropTypes.object,
    Contents: PropTypes.object,
    actRequestProducts: PropTypes.func,
    products: PropTypes.arrayOf(PropTypes.object),
    actRequestProductsSearch: PropTypes.func,
    orderBy: PropTypes.string,
};
SearchResults.defaultProps = {
    classes: {},
    Contents: {},
    actRequestProducts: () => {},
    actRequestProductsSearch: () => {},
    products: [],
    orderBy: 'homePage',
};
const mapStateToProp = (state) => {
    return {
        Contents: state.contentCarReducer,
    };
};
const MapDispatchToProps = (dispatch) => {
    return {
        actRequestProducts: () => {
            dispatch(action.actRequestProducts());
        },
        actRequestProductsSearch: (orderBy, value) => {
            dispatch(action.actRequestProductsSearch(orderBy, value));
        },
    };
};
export default connect(
    mapStateToProp,
    MapDispatchToProps
)(withStyles(styles)(SearchResults));
