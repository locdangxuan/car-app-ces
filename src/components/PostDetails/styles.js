import { makeStyles } from '@material-ui/core/styles';
import { fontFamilies, fontSize } from 'config/constants/Fonts';
import Color from 'config/constants/Colors';

const useStyles = makeStyles({
    globalContent: {
        padding: '0 15px',
        fontFamily: fontFamilies.ssfLucida,
        color: Color.white,
    },
    overview: {
        padding: '0 0 30px',
    },
    name: {
        padding: '10px',
        fontSize: fontSize.fontMain,
        fontWeight: 'bold',
    },
    detailCar: {
        padding: '2% 5%',
        marginBottom: '20px',
    },
    column: {
        padding: '0 2%',
    },
    wrapper: {
        background: Color.backgroundDetails,
    },
    info: {
        display: 'flex',
        padding: '0 5%',
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
        paddingBottom: '10px',
        marginTop: '20px',
    },
    specificationTitle: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: fontSize.fontMain,
        fontWeight: 'bold',
        padding: '10px',
    },
    specificationDetails: {
        padding: '10px 5%',
    },
    specificationContent: {
        display: 'flex',
    },
    specificationValue: {
        marginLeft: '10px',
    },
});

export default useStyles;
