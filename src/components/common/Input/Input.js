import styled from 'styled-components';

const Input = styled.input`
    ${(props) => props.theme.font};
    border: ${(props) =>
        props.theme.input.noBorder ? '0' : props.theme.input.border};
    height: ${(props) =>
        props.theme.input.height ? props.theme.input.height : 'auto'};
    width: ${(props) =>
        props.theme.input.width ? props.theme.input.width : 'auto'};
    font-size: ${(props) => props.theme.input.fontSize};
    color: ${(props) => props.theme.input.color};
    background-color: ${(props) => props.theme.input.backgroundColor};
    margin: ${(props) => props.theme.input.margin};
    outline: ${(props) => props.theme.input.outline};
    border-radius: ${(props) => props.theme.input.borderRadius};
    border-bottom: 1px solid ${(props) => props.theme.color.darkGrey};
    &:focus {
        border-bottom: 1px solid ${(props) => props.theme.color.success};
    }
    border: ${(props) => props.theme.input.border};
`;

export default Input;
