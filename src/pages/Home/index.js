import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import Component from 'config/constants/Components';
import { SearchResults, SearchBar } from 'components';
import useStyles from './styles';

const Home = (props) => {
    const classes = useStyles();
    const { orderBy } = props;
    return (
        <Box component={Component.div} className={classes.home}>
            <SearchBar />
            <SearchResults orderBy={orderBy} />
        </Box>
    );
};

Home.propTypes = {
    orderBy: PropTypes.string,
};

Home.defaultProps = {
    orderBy: 'homePage',
};

export default Home;
