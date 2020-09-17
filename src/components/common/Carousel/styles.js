import styled from 'styled-components';

const CarouselWrapper = styled.div`
    padding: 20px 5%;
`;

const Item = styled.div`
    background-color: ${(props) => props.backgroundColor};
    background-image: url(${(props) => props.backgroundImage});
    height: 500px;
    background-size: cover;
`;

export { Item, CarouselWrapper };
