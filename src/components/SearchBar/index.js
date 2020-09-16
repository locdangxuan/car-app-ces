import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { RangeSlider, Input, Button, SelectBox } from 'components/common';
import { ThemeProvider } from 'styled-components';
import { theme, useStyles } from './styles';

const SearchBar = () => {
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
                            <Input type="text" />
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
                        <Button type="submit">Search</Button>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default SearchBar;
