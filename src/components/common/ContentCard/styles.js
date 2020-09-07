import { fontFamilies } from 'config/constants/Fonts';
import Color from 'config/constants/Colors';

const styles = () => ({
    root: {
        maxWidth: 500,
        background: 'transparent',
        color: Color.white,
        fontFamily: fontFamilies.ssfLucida,
    },
    textCenter: {
        textAlign: 'center',
    },
    media: {
        height: '280px',
    },
    price: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '25px',
    },
    menuItem: {
        fontSize: 15,
        padding: 0,
    },
    nameContent: {
        paddingRight: 0,
    },
    viewDetails: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '16px',
    },
    btnView: {
        color: Color.white,
    },
    icon: {
        marginRight: '5px',
        marginBottom: '2px',
    },
    right: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    left: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    cardActionsWrapper: {
        background: Color.backgroundDetails,
    },
});
export default styles;
