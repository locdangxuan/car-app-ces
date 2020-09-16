import { makeStyles } from '@material-ui/core/styles';
import { fontFamilies } from 'config/constants/Fonts';
import Color from 'config/constants/Colors';

const useStyles = makeStyles({
    globalContent: {
        padding: '0 15px',
        fontFamily: fontFamilies.ssfLucida,
        color: Color.white,
    },
    carousel: {
        marginTop: '20px',
        padding: '10px',
    },
    column: {
        padding: '30px 0',
    },
    wrapper: {
        background: Color.backgroundDetails,
    },
    info: {
        display: 'flex',
        padding: '0 50px',
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
    specifications: {
        padding: '0 50px',
    },
    specificationTitle: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
    specificationContent: {
        display: 'flex',
    },
    specificationValue: {
        marginLeft: '10px',
    }
});

export default useStyles;
