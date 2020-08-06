import styled, { css } from 'styled-components';
import {
    darkGrey,
    lightGrey,
    warning,
    black,
    transparent,
} from 'config/constants/Colors';
import { font } from 'config/mixins/Fonts';

const buttonPropStyles = css`
    border: 1.3px solid ${(props) => props.theme.borderColor};
    width: ${(props) => props.theme.width};
    height: ${(props) => props.theme.height};
    color: ${(props) => props.theme.color};
`;

const Button = styled.button`
    ${font};
    ${buttonPropStyles};
    border-radius: 4px;
    background-color: ${transparent};
    &:focus {
        outline: none;
    }

    &:active {
        border: 1px solid ${(props) => props.theme.onActiveBorderColor};
        box-shadow: 0 1px ${lightGrey};
        transform: translateY(1px);
    }

    &:visited {
        border: 1px solid ${(props) => props.theme.onActiveBorderColor};
        box-shadow: 0 2px ${darkGrey};
    }
`;

Button.defaultProps = {
    theme: {
        borderColor: warning,
        onActiveBorderColor: warning,
        color: black,
        width: '100px',
        height: '30px',
    },
};

export default Button;
