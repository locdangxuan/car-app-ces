import styled from 'styled-components';

const Button = styled.button`
    border: 1.8px solid
        ${(props) => {
            switch (props.isSuccess) {
                case true:
                    return props.theme.color.success;
                case false:
                    return props.theme.color.danger;
                default:
                    return props.theme.color.white;
            }
        }};
    width: ${(props) => props.theme.button.width};
    height: ${(props) => props.theme.button.height};
    border-radius: ${(props) => props.theme.button.borderRadius};
    display: ${(props) => props.theme.button.display};
    color: ${(props) => props.theme.button.color};
    background-color: ${(props) => props.theme.button.backgroundColor};
    --onActiveBorderColor: ${(props) => {
        switch (props.isSuccess) {
            case true:
                return props.theme.color.success;
            case false:
                return props.theme.color.danger;
            default:
                return props.theme.color.white;
        }
    }};
    ${(props) => props.theme.font};
    &:focus {
        outline: none;
    }
    &:active {
        border: 2px solid var(--onActiveBorderColor);
        box-shadow: 0 1px ${(props) => props.theme.color.lightGrey};
        transform: translateY(1px);
    }
    &:visited {
        border: 2px solid var(--onActiveBorderColor);
        box-shadow: 0 2px ${(props) => props.theme.color.darkGrey};
    }
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
    font-size: ${(props) =>
        props.theme.button.fontSize ? props.theme.button.fontSize : ''};
    margin: ${(props) => props.theme.button.margin};
    margin-left: ${(props) => props.theme.button.marginLeft};
    opacity: 0.85;
`;

export default Button;
