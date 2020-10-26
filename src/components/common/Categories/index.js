/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as carAction from 'redux/actions/Action.GetCar';
import {
    ModelCategories,
    ModelCategoryButton,
    StyledLink,
    categoryTheme,
} from './styles';

const Categories = (props) => {
    const getListCarInHomePage = () => {
        props.actRequestProducts();
    };
    return (
        <ThemeProvider theme={categoryTheme}>
            <ModelCategories>
                <StyledLink to="/">
                    <ModelCategoryButton onClick={getListCarInHomePage}>
                        HOME
                    </ModelCategoryButton>
                </StyledLink>
                <StyledLink to="/contacts">
                    <ModelCategoryButton>CONTACT</ModelCategoryButton>
                </StyledLink>
            </ModelCategories>
        </ThemeProvider>
    );
};

Categories.propTypes = {
    actRequestProducts: PropTypes.func,
};
Categories.defaultProps = {
    actRequestProducts: () => {},
};

const mapStateToProps = (state) => ({ ...state.authReducer });
const mapDispatchToProps = (dispatch) => ({
    actRequestProducts: () => {
        dispatch(carAction.actRequestProducts());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
