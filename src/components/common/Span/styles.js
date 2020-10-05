import styled from 'styled-components';
import { fontSmall } from 'config/mixins/Fonts';

const Span = styled.span`
    color: ${(props) => {
        switch (props.isValid) {
            case true:
                return props.theme.color.success;
            case false:
                return props.theme.color.danger;
            case undefined:
                return props.theme.span.color;
            default:
                return props.theme.color.black;
        }
    }};
    height: ${(props) =>
        props.theme.span.height ? props.theme.span.height : ''};
    width: ${(props) => (props.theme.span.width ? props.theme.span.width : '')};
    display: ${(props) => props.theme.span.display};
    margin: ${(props) => props.theme.span.margin};
    max-width: ${(props) =>
        props.theme.span.maxWidth ? props.theme.span.maxWidth : ''};
    text-align: ${(props) => props.theme.span.textAlign};
    ${(props) => {
        if (props.theme.span.font) return props.theme.span.font;
        return props.theme.font;
    }};
`;

const ModalSpan = styled(Span)`
    ${fontSmall};
`;

export { ModalSpan, Span };
