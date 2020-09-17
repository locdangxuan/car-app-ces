import style from 'styled-components';

const wrapper = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 79vh;
`;

const body = style.div`
    background-color: black;
    opacity: 0.8;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 20vw;
    height: 40vh;
`;

export default {
    wrapper,
    body,
};
