import styled from 'styled-components';
import globalTheme from 'config/constants/Themes';
import Color from 'config/constants/Colors';
import { fontSmall } from 'config/mixins/Fonts';

const Wrapper = styled.div`
    width: 100%;
    margin: 1vw 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const theme = {
    bigSpan: {
        span: {
            ...globalTheme.span,
            margin: '0',
            textAlign: 'left',
            maxWidth: '100%',
            display: 'inline-block !important',
        },
    },
    span: {
        ...globalTheme.span,
        textAlign: 'left',
        font: fontSmall,
        margin: '0 0 0 10px',
        color: Color.lightGrey,
    },
    textarea: {
        margin: '0 0 0 8px',
        border: 'none',
        backgroundColor: Color.transparent,
        color: Color.white,
        width: '100%',
        height: '3vw',
        font: fontSmall,
    },
    button: {
        width: '4%',
        height: '4%',
        margin: '0',
        borderColor: Color.transparent,
        backgroundColor: Color.transparent,
        border: 'none',
    },
    image: {
        width: '100%',
        height: '100%',
        color: Color.transparent,
    },
};

export { Wrapper, TitleWrapper, ContentWrapper, theme };
