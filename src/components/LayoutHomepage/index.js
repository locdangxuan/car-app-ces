import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentCard from 'components/common/ContentCard';
import * as action from 'redux/actions/Action.GetCar';
import styles from './styles';

const LayoutHomepage = (props) => {
    useEffect(() => {
        props.actRequestProducts();
    });
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
    return (
        <Container fixed>
            <Grid container className={classes.layoutWrapper}>
                {ShowContent(Contents, classes)}
            </Grid>
        </Container>
    );
};

LayoutHomepage.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.object),
    Contents: PropTypes.arrayOf(PropTypes.object),
    actRequestProducts: PropTypes.func,
};
LayoutHomepage.defaultProps = {
    classes: [],
    Contents: [],
    actRequestProducts: {},
};
const mapStateToProp = (state) => {
    return {
        Contents: state.contentCar,
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
)(withStyles(styles)(LayoutHomepage));
