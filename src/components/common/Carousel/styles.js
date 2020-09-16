import styled from 'styled-components';

const CarouselWrapper = styled.div`
    padding: 30px 50px;
`;

const Item = styled.div`
    background-color: ${(props) => props.backgroundColor};
    background-image: url(${(props) => props.backgroundImage});
    height: 550px;
    background-size: cover;
`;

export { Item, CarouselWrapper };
