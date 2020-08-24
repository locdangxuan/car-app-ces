import styled from 'styled-components';
import { Image } from 'components/common';

const ModelCategories = styled.div`
    display: flex;
    height: auto;
    justify-content: center;
    opacity: 0.75;
    padding-top: 10px;
`;

const ModelCategoryButton = styled.button`
    display: inline-flex;
    border: none;
    background: transparent;
    color: #fff;
    margin-left: 10px;
`;

const IconDown = Image;

export { ModelCategories, ModelCategoryButton, IconDown };
