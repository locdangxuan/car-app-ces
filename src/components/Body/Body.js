import styled from 'styled-components';
import Background from 'assets/images/App.Background.jpg';

const Body = styled.div`
    background-image: url(${Background});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-attachment: fixed;
    padding-top: 100px;
    opacity: 0.95;
    position: relative;
`;

export default Body;
