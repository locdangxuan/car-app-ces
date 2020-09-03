import React from 'react';
import { Grid } from '@material-ui/core';
import { RangeSlider, Span, Input, Button } from 'components/common';
import { makeStyles } from '@material-ui/core/styles';
import Color from 'config/constants/Colors';
import { ThemeProvider } from 'styled-components';
import style from './SearchBar';

const useStyles = makeStyles(() => ({
    search: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    advantageSearch: {
        display: 'flex',
        flexDirection: 'row',
    },
    wrapper: {
        backgroundColor: 'gray',
        opacity: '0.75',
    },
    searchBarComponent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const SearchBar = () => {
    const theme = {
        span: {
            width: '100px',
        },
        input: {
            inputWidth: '100%',
            backgroundColor: Color.transparent,
            margin: '0 0 0 28px',
            border: '0.5px solid #2c3531',
        },
    };
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={3} className={classes.wrapper}>
                <Grid item xs className={classes.search}>
                    <Grid className={classes.advantageSearch}>
                        <Span>Search</Span>
                        <Input type="text" />
                    </Grid>
                    <style.SelectBoxStyle />
                </Grid>
                <Grid item xs className={classes.searchBarComponent}>
                    <RangeSlider
                        name="Age"
                        min="1900"
                        max="2020"
                        defaultValue="1900,2020"
                    />
                </Grid>
                <Grid item xs className={classes.searchBarComponent}>
                    <RangeSlider
                        name="Price"
                        min="0"
                        max="69500"
                        defaultValue="0,69500"
                    />
                </Grid>
                <Grid item xs className={classes.searchBarComponent}>
                    <Button type="submit">Search</Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default SearchBar;
