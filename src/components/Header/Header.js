import styled from 'styled-components';
import { Grid } from '@material-ui/core';

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

export { HeaderWrapper, GridHeader };
