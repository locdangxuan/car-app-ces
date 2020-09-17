import styled from 'styled-components';
import { fontHeader } from 'config/mixins/Fonts';

const Body = styled.section`
    margin: 30px;
`;

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    z-index: 500;
    background-color: ${(props) => props.theme.color.backgroundModal};
    justify-content: center;
    align-items: center;
    animation: modal-mount linear 0.2s;

    @keyframes modal-mount {
        from {
            opacity: 0;
        }
        to {
            opacity: 0.5;
        }
    }
`;
const Header = styled.section`
    ${fontHeader};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.black};
    margin-top: 20px;
`;
const Footer = styled.section`
    display: flex;
    bottom: 0;
    width: 84%;
    justify-content: ${(props) => {
        switch (props.type) {
            case 'single':
                return 'center';
            default:
                return 'space-between';
        }
    }};
    margin: 2vw 0 1vw;
`;
const Content = styled.section`
    padding: 25px;
    z-index: 1000;
    opacity: 1;
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 400px;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.color.white};
    flex-direction: column;
    animation: popup linear 0.2s;

    @keyframes popup {
        from {
            transform: scale(0.7);
            opacity: 0.2;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
export { Content, Wrapper, Body, Header, Footer };
