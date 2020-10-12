import styled from 'styled-components';

const CarouselWrapper = styled.div`
    padding: 0 5% 10px;
`;

const Item = styled.div`
    background-image: url(${(props) => props.backgroundImage});
    height: 490px;
    background-size: cover;
`;

export { Item, CarouselWrapper };
