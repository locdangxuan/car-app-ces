import styled from 'styled-components';
import { Button } from 'components/common';
import color from 'config/constants/Colors';

const Background = styled.section`
    display: flex;
    width: 95%;
    height: 95%;
    background-image: url(${(props) => props.imgSrc});
    background-size: cover;
    background-position: center;
    justify-content: flex-end;
    &:hover {
        cursor: pointer;
        ${Button} {
            display: block;
            opacity: 0.7;
            border: none;
            background: ${color.backgroundImage};
        }
    }
`;

const Wrapper = styled.section`
    margin: 10px;
    padding: 4px;
    width: ${(props) =>
        props.theme.imageCard.width ? props.theme.imageCard.width : '16vw'};
    height: ${(props) =>
        props.theme.imageCard.height ? props.theme.imageCard.height : '38vh'};
    background: ${(props) => props.theme.color.transparent};
`;

const theme = {
    button: {
        width: '100%',
        height: '100%',
        margin: '0',
        borderColor: color.transparent,
        backgroundColor: color.transparent,
        display: 'none',
    },
    image: {
        width: '100%',
        height: '100%',
        color: color.white,
    },
};

export { Wrapper, Background, theme };
