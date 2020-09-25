import styled from 'styled-components';
import Color from 'config/constants/Colors';
import { Link } from 'react-router-dom';
import { Span } from 'components/common';

const Wrapper = styled.div`
    background-color: ${Color.backgroundDetails};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    padding-bottom: 5vh;
`;

const Body = styled.div`
    background-color: ${Color.backgroundDetails};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: justify;
`;

const StyledLink = styled(Link)`
    color: ${Color.danger};
    text-decoration: none;
`;

const StyledSpan = styled(Span)`
    margin: 10vh;
    font-size: 20px;
`;

const theme = {
    span: {
        color: Color.white,
    },
};

export { Wrapper, Body, StyledLink, StyledSpan, theme };
