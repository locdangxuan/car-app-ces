import styled from 'styled-components';

const Button = styled.button`
    --onActiveBorderColor: ${(props) =>
        props.isSuccess ? props.theme.color.success : props.theme.color.danger};
    ${(props) => props.theme.font};
    border: 1.3px solid ${(props) => props.theme.button.borderColor};
    width: ${(props) => props.theme.button.width};
    height: ${(props) => props.theme.button.height};
    color: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.button.border_radius};
    background-color: ${(props) => props.theme.color.transparent};
    &:focus {
        outline: none;
    }
    &:active {
        border: 1px solid var(--onActiveBorderColor);
        box-shadow: 0 1px ${(props) => props.theme.color.lightGrey};
        transform: translateY(1px);
    }
    &:visited {
        border: 1px solid var(--onActiveBorderColor);
        box-shadow: 0 2px ${(props) => props.theme.color.darkGrey};
    }
    margin-left: 10px;
`;

export default Button;
