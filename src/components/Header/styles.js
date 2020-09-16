import styled from 'styled-components';
import { Grid, makeStyles } from '@material-ui/core';
import { fontFamilies } from 'config/constants/Fonts';

const HeaderWrapper = styled.div`
    background-color: ${(props) => props.theme.header.backgroundColor};
    color: ${(props) => props.theme.header.color};
    position: fixed;
    z-index: 200;
    width: 100%;
`;

const GridHeader = styled(Grid)`
    display: flex;
    align-items: center;
    padding: 4px;
    width: 100%;
`;

const useStyles = makeStyles({
    headerContainer: {
        margin: '0',
        width: '100%',
        fontFamily: fontFamilies.ssfLucida,
    },
});

export { HeaderWrapper, GridHeader, useStyles };
