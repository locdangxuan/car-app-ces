import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ExpandMore } from '@material-ui/icons';
import {
    ModelCategories,
    ModelCategoryButton,
    StyledLink,
    DropdownButton,
    Dropdown,
    DropdownContent,
    Brand,
    categoryTheme,
} from './styles';

const listBrands = ['Ford', 'Ferrari', 'Audi', 'Acura'];

const Categories = () => {
    return (
        <ThemeProvider theme={categoryTheme}>
            <ModelCategories>
                <StyledLink to="/">
                    <ModelCategoryButton>HOME</ModelCategoryButton>
                </StyledLink>
                <Dropdown>
                    <DropdownButton>
                        BRAND
                        <ExpandMore />
                        <DropdownContent>
                            {listBrands &&
                                listBrands.map((brand) => {
                                    return (
                                        <Brand key={brand}>
                                            <StyledLink
                                                to={`${brand.toLowerCase()}`}
                                            >
                                                {brand}
                                            </StyledLink>
                                        </Brand>
                                    );
                                })}
                        </DropdownContent>
                    </DropdownButton>
                </Dropdown>
                <ModelCategoryButton>
                    YEAR
                    <ExpandMore />
                </ModelCategoryButton>
                <StyledLink to="/contacts">
                    <ModelCategoryButton>CONTACT</ModelCategoryButton>
                </StyledLink>
            </ModelCategories>
        </ThemeProvider>
    );
};

export default Categories;
