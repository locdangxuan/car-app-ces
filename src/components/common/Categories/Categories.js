import styled from 'styled-components';

const ModelCategories = styled.div`
    display: flex;
    height: auto;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 2rem;
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

const IconDown = styled.img`
    width: 15px;
    height: 15px;
    color: white;
    margin-left: 5px;
`;

export { ModelCategories, ModelCategoryButton, IconDown };
