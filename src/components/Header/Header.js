import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const HeaderWrapper = styled.div`
    background-color: #1a1a1a;
    color: #fff;
`;

const GridHeader = styled(Grid)`
    display: flex;
    align-items: center;
    padding: 4px;
`;

export { HeaderWrapper, GridHeader };
