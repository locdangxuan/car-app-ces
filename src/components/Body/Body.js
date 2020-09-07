import styled from 'styled-components';
import Background from 'assets/images/App.Background.jpg';

const Body = styled.div`
    background-image: url(${Background});
    height: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding-top: 100px;
    opacity: 0.95;
    position: relative;
`;

export default Body;
