import styled from 'styled-components';
import { white, black } from 'config/constants/Colors';
import { fontHeader } from 'config/mixins/Fonts';

const Body = styled.section`
    margin: 20px;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${black};
    opacity: 0.6;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
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
const Header = styled.head`
    ${fontHeader};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${black};
    margin-top: 20px;
`;
const Footer = styled.footer`
    display: flex;
    bottom: 0;
    width: 84%;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const Content = styled.section`
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    width: 260px;
    text-transform: uppercase;
    background-color: ${white};
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
