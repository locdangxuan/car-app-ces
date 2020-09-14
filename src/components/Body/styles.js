import styled from 'styled-components';
import theme from 'config/constants/Themes';
import Background from 'assets/images/cars.webp';

const Body = styled.div`
    background-image: url(${Background});
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    padding-top: 100px;
    background-repeat: no-repeat;
    opacity: 0.95;
    color: ${theme.body.color};
`;

export default Body;
