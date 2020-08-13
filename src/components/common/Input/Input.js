import styled from 'styled-components';

const Input = styled.input`
    ${(props) => props.theme.font};
    border: ${(props) => (props.theme.input.noBorder ? '0' : '1px')};
    width: ${(props) => props.theme.input.inputWidth};
    font-size: ${(props) => props.theme.input.fontSize};
    color: ${(props) => props.theme.input.fontColor};
    background-color: ${(props) => props.theme.input.backgroundColor};
    margin: ${(props) => props.theme.input.margin};
    outline: ${(props) => props.theme.input.outline};
    border-radius: ${(props) => props.theme.input.border_radius};
    border-bottom: 0.5px solid ${(props) => props.theme.color.darkGrey};
    &:focus {
        border-bottom: 0.5px solid ${(props) => props.theme.color.success};
    }
`;

export default Input;
