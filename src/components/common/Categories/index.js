/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
    ModelCategories,
    ModelCategoryButton,
    StyledLink,
    categoryTheme,
} from './styles';

const Categories = () => {
    return (
        <ThemeProvider theme={categoryTheme}>
            <ModelCategories>
                <StyledLink to="/">
                    <ModelCategoryButton>HOME</ModelCategoryButton>
                </StyledLink>
                <StyledLink to="/contacts">
                    <ModelCategoryButton>CONTACT</ModelCategoryButton>
                </StyledLink>
            </ModelCategories>
        </ThemeProvider>
    );
};

export default Categories;
