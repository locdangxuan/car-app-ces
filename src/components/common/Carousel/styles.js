import styled from 'styled-components';
import Color from 'config/constants/Colors';

const CarouselWrapper = styled.div`
    padding: 40px;
`;

const Item = styled.div`
    background-color: ${Color.white};
    height: 400px;
    color: ${Color.black};
`;

export { Item, CarouselWrapper };
