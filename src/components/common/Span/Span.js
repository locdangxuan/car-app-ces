import styled from 'styled-components';
import { fontSmall } from 'config/mixins/Fonts';

const Span = styled.span`
    color: ${(props) =>
        props.isValid === true
            ? props.theme.color.success
            : props.theme.color.danger};
    display: ${(props) => props.theme.span.display};
    margin: ${(props) => props.theme.span.margin};
    text-align: ${(props) => props.theme.span.text_align};
    ${(props) => props.theme.font};
`;

const ModalSpan = styled(Span)`
    ${fontSmall};
`;

export { ModalSpan, Span };
