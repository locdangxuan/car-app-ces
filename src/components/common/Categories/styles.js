import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Color from 'config/constants/Colors';

const ModelCategories = styled.div`
    display: flex;
    height: auto;
    width: 100%;
    text-decoration: none;
    padding-left: 30px;
`;

const ModelCategoryButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: ${(props) => props.theme.modelCategoryButton.background};
    color: ${(props) => props.theme.modelCategoryButton.color};
    margin: ${(props) => props.theme.modelCategoryButton.margin};
    padding-left: ${(props) => props.theme.modelCategoryButton.paddingLeft};
    font-size: 18px;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
    &:visited {
        border: none;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    width: 100%;
    z-index: 1;
    color: ${(props) => props.theme.dropdownContent.color};
    top: 100%;
    background: ${Color.backgroundHeader};
`;

const DropdownButton = styled(ModelCategoryButton)`
    &:hover ${DropdownContent} {
        display: block;
    }

    &:focus ${DropdownContent} {
        display: block;
    }
`;

const Brand = styled.div`
    display: flex;
    padding-left: 10px;
    align-items: center;
    color: ${(props) => props.theme.brand.color};
    ${StyledLink} {
        color: ${(props) => props.theme.brand.color};
        opacity: 0.8;
    }
    &:hover {
        ${StyledLink} {
            color: ${(props) => props.theme.brand.color};
            opacity: 1;
        }
    }
`;

const categoryTheme = () => ({
    modelCategoryButton: {
        color: `${Color.white} !important`,
        paddingLeft: '20px',
        background: Color.transparent,
    },
    dropdownContent: {
        color: Color.white,
    },
    brand: {
        color: Color.white,
    },
});

export {
    ModelCategories,
    ModelCategoryButton,
    StyledLink,
    DropdownContent,
    Dropdown,
    DropdownButton,
    Brand,
    categoryTheme,
};
