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
                return props.theme.span.color;
        }
    }};
    height: ${(props) =>
        props.theme.span.height ? props.theme.span.height : ''};
    width: ${(props) => (props.theme.span.width ? props.theme.span.width : '')};
    display: ${(props) => props.theme.span.display};
    margin: ${(props) => props.theme.span.margin};
    text-align: ${(props) => props.theme.span.text_align};
    ${(props) => props.theme.font};
`;

const ModalSpan = styled(Span)`
    ${fontSmall};
`;

export { ModalSpan, Span };
