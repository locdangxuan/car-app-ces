import styled from 'styled-components';
import Color from 'config/constants/Colors';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    content: {
        margin: '10px 0',
        background: Color.backgroundDetails,
        maxWidth: '32%',
    },
    layoutWrapper: {
        justifyContent: 'space-around',
    },
});

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export { useStyles, StyledLink };
