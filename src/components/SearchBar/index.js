import React, { useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { RangeSlider, Input, Button, SelectBox } from 'components/common';
import { ThemeProvider } from 'styled-components';
import * as action from 'redux/actions/Action.GetCar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { theme, useStyles } from './styles';

const SearchBar = (props) => {
    const [valueSearch, setvalueSearch] = useState('');
    function handleChangeValueSearch(e) {
        setvalueSearch(e.target.value);
    }
    function submitSearch() {
        props.actRequestProductsSearch(valueSearch);
    }
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Box component="div" className={classes.searchBarWrapper}>
                <Grid container className={classes.wrapper}>
                    <Grid item xs={3} className={classes.search}>
                        <Grid className={classes.advantageSearch}>
                            <Box component="span" className={classes.keyword}>
                                Keywords
                            </Box>
                            <Input
                                type="text"
                                onChange={handleChangeValueSearch}
                            />
                        </Grid>
                        <SelectBox name="Category" />
                    </Grid>
                    <Grid item xs={3} className={classes.searchBarComponent}>
                        <RangeSlider name="Age (year)" min="1900" max="2020" />
                    </Grid>
                    <Grid item xs={3} className={classes.searchBarComponent}>
                        <RangeSlider name="Price (USD)" min="0" max="69500" />
                    </Grid>
                    <Grid item xs={3} className={classes.searchBarComponent}>
                        <Button type="submit" onClick={submitSearch}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};
SearchBar.propTypes = {
    actRequestProductsSearch: PropTypes.func,
};
SearchBar.defaultProps = {
    actRequestProductsSearch: {},
};
const mapStateToProp = (state) => {
    return {
        Contents: state.contentCar,
    };
};
const MapDispatchToProps = (dispatch) => {
    return {
        actRequestProductsSearch: (value) => {
            dispatch(action.actRequestProductsSearch(value));
        },
    };
};
export default connect(mapStateToProp, MapDispatchToProps)(SearchBar);
