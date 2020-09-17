import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const FullpageWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 500;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    opacity: 0.6;
`;

const Circle = styled.div`
    --size: ${(props) => props.theme.loader.fontSize};
    width: ${(props) =>
        props.theme.loader.width ? props.theme.loader.width : '20px'};
    height: ${(props) =>
        props.theme.loader.height ? props.theme.loader.height : '20px'};
    margin: 0 auto;
    position: relative;
`;

const Child = css`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: ${(props) => props.theme.color.black};
        border-radius: 100%;
        -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
        animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
    }

    @-webkit-keyframes sk-circleBounceDelay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes sk-circleBounceDelay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
`;
const MiniCircle = styled.div`
    ${Child}
    --rotateDegree: ${(props) => props.rotateDegree};
    --delayDuration: ${(props) => props.delayDuration};
    -webkit-transform: rotate(var(--rotateDegree));
    -ms-transform: rotate(var(--rotateDegree));
    transform: rotate(var(--rotateDegree));

    &:before {
        -webkit-animation-delay: var(--delayDuration);
        animation-delay: var(--delayDuration);
    }
`;

export { Wrapper, Circle, MiniCircle, FullpageWrapper };
