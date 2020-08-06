import styled, { css } from 'styled-components';
import { fontSize } from 'config/constants/Fonts';
import { black, darkGrey, success } from 'config/constants/Colors';
import { font } from 'config/mixins/Fonts';

const textInput = css`
    border: ${(props) => (props.theme.noBorder ? '0' : '1px')};
    width: ${(props) => props.theme.inputWidth};
    font-size: ${(props) => props.theme.fontSize};
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.backgroundColor};
`;

const Input = styled.input`
    ${textInput};
    ${font};
    margin: 9px 0;
    outline: none;
    border-radius: 0;
    border-bottom: 0.5px solid ${darkGrey};
    &:focus {
        border-bottom: 0.5px solid ${success};
    }
`;

Input.defaultProps = {
    them: {
        noBorder: false,
        fontSize: fontSize.fontSmall,
        inputWidth: '100%',
        color: black,
    },
};

export default Input;
