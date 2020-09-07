import styled from 'styled-components';
import { Image } from 'components/common';

const ModelCategories = styled.div`
    display: flex;
    height: auto;
    justify-content: center;
`;

const ModelCategoryButton = styled.button`
    display: inline-flex;
    border: none;
    background: ${(props) => props.theme.modelCategoryButton.background};
    color: ${(props) => props.theme.modelCategoryButton.color};
    margin: ${(props) => props.theme.modelCategoryButton.margin};
`;

const IconDown = Image;

export { ModelCategories, ModelCategoryButton, IconDown };
