import { fontFamilies, fontSize } from 'config/constants/Fonts';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Color from 'config/constants/Colors';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${Color.white};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const useStyles = makeStyles({
    root: {
        background: Color.transparent,
        color: Color.white,
        fontFamily: fontFamilies.ssfLucida,
    },
    edit: {
        fontSize: fontSize.medium,
        fontWeight: 'bold',
        backgroundColor: 'red',
        width: '15%',
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCenter: {
        textAlign: 'center',
    },
    media: {
        height: '280px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    priceOfCar: {
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

export { useStyles, StyledLink };
