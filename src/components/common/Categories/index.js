/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ExpandMore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import action from 'redux/actions/Action.Post';
import utils from 'utils/utils';
import {
    ModelCategories,
    ModelCategoryButton,
    StyledLink,
    DropdownButton,
    Dropdown,
    DropdownContent,
    Brand,
    Year,
    categoryTheme,
} from './styles';

const Categories = (props) => {
    const { brands, getBrands } = props;
    useEffect(() => {
        getBrands();
    }, []);
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
                            {brands &&
                                brands.map((brand) => {
                                    return (
                                        <Brand key={brand.id}>
                                            <StyledLink
                                                to={`${brand.name.toLowerCase()}`}
                                            >
                                                {brand.name}
                                            </StyledLink>
                                        </Brand>
                                    );
                                })}
                        </DropdownContent>
                    </DropdownButton>
                </Dropdown>
                <Dropdown>
                    <DropdownButton>
                        YEAR
                        <ExpandMore />
                        <DropdownContent>
                            {utils.getYears() &&
                                utils.getYears().map((year) => {
                                    return (
                                        <Year key={year}>
                                            <StyledLink to={`${year}`}>
                                                {year}
                                            </StyledLink>
                                        </Year>
                                    );
                                })}
                        </DropdownContent>
                    </DropdownButton>
                </Dropdown>
                <StyledLink to="/contacts">
                    <ModelCategoryButton>CONTACT</ModelCategoryButton>
                </StyledLink>
            </ModelCategories>
        </ThemeProvider>
    );
};

Categories.propTypes = {
    brands: PropTypes.arrayOf(PropTypes.object),
    getBrands: PropTypes.func,
};

Categories.defaultProps = {
    brands: [],
    getBrands: () => {},
};

const mapStateToProps = (state) => ({ brands: state.postReducer.brands });

const mapDispatchToProps = (dispatch) => ({
    getBrands: () => dispatch(action.loadBrands()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
