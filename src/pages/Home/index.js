import React from 'react';
import { Box } from '@material-ui/core';
import Component from 'config/constants/Components';
import { SearchResults, SearchBar } from 'components';
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();
    return (
        <Box component={Component.div} className={classes.home}>
            <SearchBar />
            <SearchResults />
        </Box>
    );
};

export default Home;
