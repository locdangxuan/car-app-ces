import { makeStyles } from '@material-ui/core/styles';
import { fontFamilies } from 'config/constants/Fonts';
import Color from 'config/constants/Colors';

const useStyles = makeStyles({
    globalContent: {
        padding: '0 15px',
        fontFamily: fontFamilies.ssfLucida,
        color: Color.white,
    },
    column: {
        padding: '30px 50px',
    },
    carInfo: {
        background: Color.backgroundDetails,
    },
    titleWrapper: {
        background: Color.backgroundDetails,
        textAlign: 'center',
    },
    info: {
        display: 'flex',
        padding: '0 40px',
    },
    boxInfo: {
        margin: '20px',
    },
    textCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    descriptionText: {
        textAlign: 'justify',
    },
    description: {
        padding: '0 40px',
    },
    left: {
        marginLeft: '20px',
    },
    specification: {
        display: 'flex',
        justifyContent: 'center',
    },
});

export default useStyles;
