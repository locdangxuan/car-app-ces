import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontFamilies, fontSize } from 'config/constants/Fonts';
import Color from 'config/constants/Colors';

const StyledLink = styled(Link)`
    text-decoration: none;
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
    sellerInfo: {
        padding: '20px 0',
        textAlign: 'center',
    },
    specificationValue: {
        margin: '0 0 10px 10px',
    },
    table: {
        minWidth: 650,
    },
    tableColor: {
        color: Color.white,
        border: `1px solid ${Color.tableBorderColor}`,
    },
    tableHead: {
        fontSize: '30px',
    },
});

export { useStyles, StyledLink };
