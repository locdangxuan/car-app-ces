/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-line react-hooks/exhaustive-deps
import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentCard from 'components/common/ContentCard';
import * as action from 'redux/actions/Action.GetCar';
import PaginationBar from 'components/PaginationBar';
import styles from './styles';

const SearchPage = (props) => {
    useEffect(() => {
        props.actRequestProducts();
    }, []);
    const ShowContent = (Contents, classes) => {
        if (Contents.length > 0) {
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
    const { classes, Contents } = props;
    const pagination = Contents[1];
    return (
        <Container fixed>
            <Grid container className={classes.layoutWrapper}>
                {ShowContent(Contents[0], classes)}
            </Grid>
            <PaginationBar
                count={pagination.lastPage}
                valueSearch={pagination.value}
            />
        </Container>
    );
};

SearchPage.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.object),
    Contents: PropTypes.arrayOf(PropTypes.object),
    actRequestProducts: PropTypes.func,
};
SearchPage.defaultProps = {
    classes: [],
    Contents: [[], {}],
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
)(withStyles(styles)(SearchPage));
