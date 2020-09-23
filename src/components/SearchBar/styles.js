import { makeStyles } from '@material-ui/core/styles';
import Color from 'config/constants/Colors';
import globalTheme from 'config/constants/Themes';
import { fontFamilies, fontSize } from 'config/constants/Fonts';

const useStyles = makeStyles(() => ({
    searchBarWrapper: {
        paddingLeft: '44px',
        paddingRight: '44px',
    },
    search: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    advantageSearch: {
        display: 'flex',
        flexDirection: 'row',
    },
    wrapper: {
        background: Color.backgroundDetails,
        color: Color.white,
        width: '100%',
        padding: '24px',
    },
    searchBarComponent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: Color.white,
        paddingLeft: '30px',
        '& p': {
            fontSize: '18px',
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
        // backgroundColor: Color.backgroundInput,
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

export { useStyles, theme };
