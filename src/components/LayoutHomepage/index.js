/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentCard from 'components/common/ContentCard';
import * as action from 'redux/actions/Action.GetCar';
import { useStyles, StyledLink } from './styles';

const LayoutHomepage = (props) => {
    useEffect(() => {
        props.actRequestProducts();
    }, []);
    const { Contents } = props;
    const classes = useStyles();
    return (
        <Container fixed>
            <Grid container className={classes.layoutWrapper}>
                {Contents.length > 0 &&
                    Contents.map((Content) => (
                        <Grid
                            item
                            sm={4}
                            key={Content.id}
                            className={classes.content}
                        >
                            <StyledLink to={`/posts/${Content.id}`}>
                                <ContentCard data={Content} />
                            </StyledLink>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
};
LayoutHomepage.propTypes = {
    Contents: PropTypes.arrayOf(PropTypes.object),
    actRequestProducts: PropTypes.func,
};
LayoutHomepage.defaultProps = {
    Contents: [],
    actRequestProducts: {},
};
const mapStateToProp = (state) => {
    return {
        Contents: state.contentCarReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actRequestProducts: () => {
            dispatch(action.actRequestProducts());
        },
    };
};
export default connect(mapStateToProp, mapDispatchToProps)(LayoutHomepage);
