import { makeStyles } from '@material-ui/core/styles';
import { fontFamilies } from 'config/constants/Fonts';
import Color from 'config/constants/Colors';

const useStyles = makeStyles({
    globalContent: {
        padding: '0 15px',
        fontFamily: fontFamilies.ssfLucida,
        color: Color.white,
    },
    name: {
        margin: '0 5%',
    },
    overview: {
        padding: '20px 0',
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
        padding: '10px 5%',
        marginTop: '20px',
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
    },
});

export default useStyles;
