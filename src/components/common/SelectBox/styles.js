import { makeStyles } from '@material-ui/core/styles';
import { fontFamilies } from 'config/constants/Fonts';
import Color from 'config/constants/Colors';

const useStyles = makeStyles(() => ({
    formControl: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: 120,
        marginTop: '20px',
    },
    selectEmpty: {
        paddingLeft: '5px',
        height: '25px',
        marginLeft: '15px',
        width: '100%',
        border: `1px solid ${Color.white}`,
        color: Color.white,
        background: Color.backgroundInput,
    },
    option: {
        color: Color.black,
    },
    name: {
        width: '100px',
        fontFamily: fontFamilies.ssfLucida,
        fontSize: '18px',
    },
}));

export default useStyles;
