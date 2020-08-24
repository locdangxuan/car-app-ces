import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const HeaderWrapper = styled.div`
    background-color: ${(props) => props.theme.header.backgroundColor};
    color: ${(props) => props.theme.header.color};
`;

const GridHeader = styled(Grid)`
    display: flex;
    align-items: center;
    padding: 4px;
`;

export { HeaderWrapper, GridHeader };
