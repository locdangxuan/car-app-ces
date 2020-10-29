import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Color from 'config/constants/Colors';
import globalTheme from 'config/constants/Themes';
import { fontFamilies, fontSize } from 'config/constants/Fonts';

const ListBrandsTextField = styled(TextField)`
    .MuiFormLabel-root {
        color: ${Color.white};
    }
    .MuiFormLabel-root.Mui-focused {
        color: ${Color.white};
        opacity: 0.8;
    }
    .MuiInputBase-input {
        color: ${Color.white};
    }
    .MuiInput-underline:before {
        border-bottom: 1px solid ${Color.white};
    }
    &.MuiFormControl-root .MuiInput-underline:after {
        border-bottom: 1px solid ${Color.white};
    }
    &.MuiFormControl-root .MuiInput-underline:hover {
        border-bottom: 1px solid ${Color.white};
    }
    .MuiIconButton-root {
        color: ${Color.white};
    }
`;

const useStyles = makeStyles(() => ({
    searchKeywordWrapper: {
        height: 30,
        background: Color.transparent,
        borderBottom: `1px solid ${Color.white}`,
    },
    input: {
        flex: 1,
        color: Color.white,
        marginLeft: 5,
        width: '80%',
    },
    iconButton: {
        height: '100%',
        borderRadius: 0,
        padding: 2,
        marginRight: 0,
        color: Color.white,
    },
    searchBarWrapper: {
        padding: '0 51px',
    },
    search: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    wrapper: {
        background: Color.backgroundDetails,
        color: Color.white,
        width: '100%',
        padding: '2%',
    },
    searchBarComponent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: Color.white,
        paddingLeft: '30px',
        '& p': {
            fontSize: fontSize.fontMedium,
        },
    },
    keyword: {
        width: '100px',
        fontFamily: fontFamilies.ssfLucida,
        fontSize: fontSize.fontMedium,
    },
}));
const theme = {
    input: {
        ...globalTheme.input,
        width: '100%',
        margin: '0 0 0 8px',
        borderBottom: `1px solid ${Color.white}`,
        color: Color.white,
    },
    button: {
        ...globalTheme.button,
        color: Color.white,
        borderColor: Color.white,
    },
};

export { useStyles, theme, ListBrandsTextField };
