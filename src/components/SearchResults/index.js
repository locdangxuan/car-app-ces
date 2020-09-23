/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { withStyles, Grid, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ContentCard, Loader } from 'components/common';
import * as action from 'redux/actions/Action.GetCar';
import PaginationBar from 'components/PaginationBar';
import Component from 'config/constants/Components';
import { styles, StyledLink } from './styles';

const SearchResults = (props) => {
    useEffect(() => {
        props.actRequestProducts();
    }, []);
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
                        <StyledLink to={`/posts/${Content.id}`}>
                            <ContentCard data={Content} />
                        </StyledLink>
                    </Grid>
                );
            });
        }
        return null;
    };
    const { classes, Contents } = props;
    const { pagination, pending } = Contents;
    const contentsLength = Object.keys(Contents).length;
    const paginationLength = Object.keys(pagination).length;
    return (
        <Box component={Component.div} className={classes.contentCarWrapper}>
            {pending && <Loader type="FULL-PAGE">Searching</Loader>}
            {contentsLength > 0 && (
                <Grid container className={classes.layoutWrapper}>
                    {ShowContent(Contents.products, classes)}
                    {paginationLength && (
                        <PaginationBar
                            count={pagination.lastPage}
                            valueSearch={pagination.value}
                            className={classes.paginationBar}
                        />
                    )}
                </Grid>
            )}
        </Box>
    );
};

SearchResults.propTypes = {
    classes: PropTypes.object,
    Contents: PropTypes.object,
    actRequestProducts: PropTypes.func,
};
SearchResults.defaultProps = {
    classes: {},
    Contents: {},
    actRequestProducts: () => {},
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
    };
};
export default connect(
    mapStateToProp,
    MapDispatchToProps
)(withStyles(styles)(SearchResults));
