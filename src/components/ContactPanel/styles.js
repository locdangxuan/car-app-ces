import styled from 'styled-components';
import Color from 'config/constants/Colors';
import { Span } from 'components/common';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    Box: {
        display: 'flex',
        flexDirection: 'row',
    },
}));

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
    width: 80%;
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

const StyledSpan = styled(Span)`
    font-size: 20px;
    margin: 0 10vh;
`;

const theme = {
    span: {
        color: Color.white,
    },
};

export { Wrapper, Body, StyledSpan, theme, useStyles };
