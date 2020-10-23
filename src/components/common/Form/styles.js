import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.color.white};
    width: 60%;
    align-items: center;
    opacity: 0.95;
`;

const CustomTextField = styled(TextField)`
    ${(props) => {
        if (props.isError === true)
            return `&.MuiFormControl-root .MuiInput-underline {
                border-bottom: 2px solid ${props.theme.color.danger}
            }`;
    }}
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Submit = styled.section`
    margin: 30px;
    display: flex;
    bottom: 0;
    width: 30%;
    align-items: center;
    justify-content: space-between;
`;

const DisableTextField = styled(TextField)`
    .MuiInputBase-input {
        cursor: default;
    }
    &.MuiFormControl-root .MuiInput-underline:before {
        border-bottom: none;
    }
    &.MuiFormControl-root .MuiInput-underline:after {
        border-bottom: none;
    }
    &.MuiFormControl-root .MuiInput-underline:hover {
        border-bottom: none;
    }
    &.MuiFormControl-root .MuiInput-underline:hover:not(.Mui-disabled):before {
        border-bottom: none;
    }
`;

const ImageTextField = styled(DisableTextField)`
    .MuiInputLabel-formControl {
        transform: translate(0, 1.5px) scale(0.75);
        transform-origin: top left;
    }
`;

const useStyle = makeStyles(() => ({
    selector: {
        margin: '0 7% 0',
        height: '40px',
    },
    selectedBox: {
        marginTop: 0,
    },
    autoComplete: {
        width: '100%',
    },
    customTextField: {
        marginTop: 12,
    },
}));

const theme = {
    field: {
        width: '75%',
        margin: '16px 0 0',
    },
    imageCard: {
        width: '200px',
        height: '100px',
    },
};

export {
    Wrapper,
    Submit,
    useStyle,
    theme,
    StyledLink,
    DisableTextField,
    ImageTextField,
    CustomTextField,
};
