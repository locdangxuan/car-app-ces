/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Grid, Box, InputBase, IconButton, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { RangeSlider, Button } from 'components/common';
import { ThemeProvider } from 'styled-components';
import * as actionCar from 'redux/actions/Action.GetCar';
import action from 'redux/actions/Action.Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import component from 'config/constants/Components';
import { theme, useStyles, ListBrandsTextField } from './styles';

const SearchBar = (props) => {
    const { brands, getBrands } = props;
    const [valueSearch, setvalueSearch] = useState('');
    const [brand, setBrand] = useState('');
    useEffect(() => {
        getBrands();
    }, []);
    function handleChangeValueSearch(e) {
        setvalueSearch(e.target.value);
    }
    function submitSearch() {
        props.actRequestProductsSearch('search', valueSearch);
    }
    const classes = useStyles();

    const brandsFlatProps = {
        options: brands.map((option) => (option.name ? option.name : '')),
    };

    const onBrandChangeHandler = (event, value) => {
        setBrand(value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box component={component.div} className={classes.searchBarWrapper}>
                <Grid container className={classes.wrapper}>
                    <Grid item xs={3} className={classes.search}>
                        <Paper
                            component={component.form}
                            className={classes.searchKeywordWrapper}
                        >
                            <IconButton
                                className={classes.iconButton}
                                aria-label="menu"
                            >
                                <SearchIcon />
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search Car"
                                    onChange={handleChangeValueSearch}
                                />
                            </IconButton>
                        </Paper>
                        <Autocomplete
                            name="brand"
                            disableClearable
                            {...brandsFlatProps}
                            onChange={onBrandChangeHandler}
                            value={brand}
                            renderInput={(params) => (
                                <ListBrandsTextField
                                    {...params}
                                    label="Brands"
                                    margin="normal"
                                    value={brand}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={3} className={classes.searchBarComponent}>
                        <RangeSlider name="Year" min="1900" max="2020" />
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
    getBrands: PropTypes.func,
    brands: PropTypes.arrayOf(PropTypes.object),
};
SearchBar.defaultProps = {
    actRequestProductsSearch: () => {},
    getBrands: () => {},
    brands: [],
};
const mapStateToProp = (state) => {
    return {
        Contents: state.contentCar,
        brands: state.postReducer.brands,
    };
};
const MapDispatchToProps = (dispatch) => {
    return {
        actRequestProductsSearch: (orderBy, value) => {
            dispatch(actionCar.actRequestProductsSearch(orderBy, value));
        },
        getBrands: () => dispatch(action.loadBrands()),
    };
};
export default connect(mapStateToProp, MapDispatchToProps)(SearchBar);
