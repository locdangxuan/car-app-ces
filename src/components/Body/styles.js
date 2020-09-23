import styled from 'styled-components';
import Background from 'assets/images/cars.jpg';

const Body = styled.div`
    background-image: url(${Background});
    width: 100%;
    height: 100%;
    min-height: 80vh;
    background-size: cover;
    background-attachment: fixed;
    padding-top: 100px;
    background-repeat: no-repeat;
    opacity: 0.95;
    color: ${(props) => props.theme.body.color};
`;

export default Body;
