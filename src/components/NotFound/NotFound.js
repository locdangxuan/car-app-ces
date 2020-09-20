import style from 'styled-components';
import Color from 'config/constants/Colors';

const Wrapper = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
`;

const Body = style.div`
    background-color: ${Color.black};
    opacity: 0.8;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 30vw;
    height: 40vh;
    text-align: justify;
`;

export { Wrapper, Body };
