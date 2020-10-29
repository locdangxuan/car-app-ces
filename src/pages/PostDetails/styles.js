import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontFamilies, fontSize } from 'config/constants/Fonts';
import Color from 'config/constants/Colors';
import { ToggleButton } from '@material-ui/lab';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const StyledToggleButton = styled(ToggleButton)`
    &.MuiToggleButton-root.Mui-selected {
        color: ${Color.hoverColorNavigationDetails};
        background: ${Color.transparent};
    }
`;
const useStyles = makeStyles({
    globalContent: {
        padding: '5vh 15px',
        fontFamily: fontFamilies.ssfLucida,
        color: Color.white,
    },
    overview: {
        padding: '0 0 30px',
    },
    name: {
        display: 'flex',
        justifyContent: 'center',
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
        position: 'relative',
    },
    info: {
        display: 'flex',
        padding: '1% 5%',
    },
    boxInfo: {
        margin: '20px',
    },
    textCenter: {
        display: 'flex',
        width: '33%',
    },
    descriptionText: {
        textAlign: 'justify',
    },
    description: {
        padding: '0 40px',
    },
    left: {
        marginLeft: '20px',
        marginRight: '5px',
    },
    first: {
        marginRight: '5px',
    },
    title: {
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
    navigations: {
        marginTop: '20px',
    },
    navigationButton: {
        color: Color.white,
        borderRadius: 0,
        border: `0.5px solid ${Color.white}`,
        '&:hover': {
            color: Color.hoverColorNavigationDetails,
            background: Color.backgroundDetails,
        },
        '&:focus': {
            color: Color.hoverColorNavigationDetails,
        },
    },
    sellerInfo: {
        padding: '20px 0',
    },
    specificationValue: {
        display: 'flex',
        paddingLeft: 10,
        marginBottom: 15,
    },
    infoSeller: {
        marginLeft: 10,
        marginTop: 2,
    },
    iconPersonInfo: {
        marginLeft: 10,
        marginTop: 2,
    },
    table: {
        minWidth: 650,
    },
    tableColor: {
        color: Color.white,
        border: `1px solid ${Color.tableBorderColor}`,
    },
    tableHead: {
        fontSize: fontSize.fontLarge,
    },
    otherFeatures: {
        marginTop: 20,
        marginLeft: '5%',
    },
    feature: {
        marginBottom: 10,
    },
    updateButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export { useStyles, StyledLink, StyledToggleButton };
