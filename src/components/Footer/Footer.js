import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const FooterWrapper = styled.div`
    background-color: ${(props) => props.theme.header.backgroundColor};
    color: ${(props) => props.theme.header.color};
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: unset;
    height: 50px;
`;

const GridFooter = styled(Grid)`
    margin: 0;
    display: flex;
    align-items: center;
`;

export { FooterWrapper, GridFooter };
