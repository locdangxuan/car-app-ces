import styled from 'styled-components';
import Background from 'assets/images/App.Background.jpg';

const StyledApp = styled.div`
    background-image: url(${Background});
    width: 100%;
    height: 100vh;
    background-size: cover;
    opacity: 0.95;
    position: relative;
`;

export default StyledApp;
