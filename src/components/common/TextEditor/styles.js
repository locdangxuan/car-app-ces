import styled from 'styled-components';
import { fontMain } from 'config/mixins/Fonts';
import Color from 'config/constants/Colors';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const theme = {
    textarea: {
        width: '100%',
        height: '200px',
        font: fontMain,
    },
    button: {
        color: Color.white,
        backgroundColor: Color.transparent,
        width: '20%',
        margin: '9px 0 0',
    },
};
