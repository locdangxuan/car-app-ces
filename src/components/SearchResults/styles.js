import Color from 'config/constants/Colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const styles = () => ({
    contentCarWrapper: {
        padding: '0 40px',
    },
    content: {
        margin: '10px 0',
        background: Color.backgroundDetails,
        maxWidth: '32%',
    },
    layoutWrapper: {
        justifyContent: 'space-around',
    },
    paginationBar: {
        backgroundColor: Color.white,
    },
});

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export { styles, StyledLink };
