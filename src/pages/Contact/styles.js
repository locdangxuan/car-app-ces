import styled from 'styled-components';
import Color from 'config/constants/Colors';

const Wrapper = styled.div`
    background-color: ${Color.backgroundDetails};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    padding-bottom: 5vh;
`;

const theme = {
    span: {
        color: Color.white,
    },
};

export { Wrapper, theme };
