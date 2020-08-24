import React from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentCard from 'components/common/ContentPresentation';
import styles from './styles';

const LayoutHomepage = (props) => {
    const { classes, Contents } = props;
    const showContent = (data, classesCss) => {
        if (data.length > 0) {
            return Contents.map((Content) => {
                return (
                    <Grid xs={3} spacing={4} className={classesCss.content}>
                        <ContentCard data={Content} />
                    </Grid>
                );
            });
        }
        return null;
    };
    return (
        <Container fixed>
            <Grid container>{showContent(Contents, classes)}</Grid>
        </Container>
    );
};

LayoutHomepage.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.object),
    Contents: PropTypes.arrayOf(PropTypes.object),
};
LayoutHomepage.defaultProps = {
    classes: [],
    Contents: [],
};

const mapStateToProp = (state) => {
    return {
        Contents: state.contentCar,
    };
};

export default connect(mapStateToProp)(withStyles(styles)(LayoutHomepage));
