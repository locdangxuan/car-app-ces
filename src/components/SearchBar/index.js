import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { RangeSlider, Span, Input, Button } from 'components/common';
import { makeStyles } from '@material-ui/core/styles';
import Color from 'config/constants/Colors';
import { ThemeProvider } from 'styled-components';
import globalTheme from 'config/constants/Themes';
import style from './SearchBar';

const useStyles = makeStyles(() => ({
    searchBarWrapper: {
        paddingLeft: '44px',
        paddingRight: '44px',
    },
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
        background: Color.backgroundDetails,
        color: Color.white,
        width: '100%',
        padding: '24px',
    },
    searchBarComponent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: Color.white,
        paddingLeft: '30px',
    },
}));
const theme = {
    span: {
        width: '100px',
        margin: '5px 0 0 0',
    },
    input: {
        width: '100%',
        backgroundColor: Color.backgroundInput,
        margin: '0 0 0 21px',
        border: '0.5px solid #fff',
        color: Color.white,
    },
    button: {
        ...globalTheme.button,
        color: Color.white,
        borderColor: Color.white,
    },
};
const SearchBar = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Box component="div" className={classes.searchBarWrapper}>
                <Grid container className={classes.wrapper}>
                    <Grid item xs={3} className={classes.search}>
                        <Grid className={classes.advantageSearch}>
                            <Span>Search</Span>
                            <Input type="text" />
                        </Grid>
                        <style.SelectBoxStyle name="Category" />
                    </Grid>
                    <Grid item xs={3} className={classes.searchBarComponent}>
                        <RangeSlider
                            name="Age"
                            min="1900"
                            max="2020"
                            defaultValue="1900,2020"
                        />
                    </Grid>
                    <Grid item xs={3} className={classes.searchBarComponent}>
                        <RangeSlider
                            name="Price"
                            min="0"
                            max="69500"
                            defaultValue="0,69500"
                        />
                    </Grid>
                    <Grid item xs={3} className={classes.searchBarComponent}>
                        <Button type="submit">Search</Button>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default SearchBar;
