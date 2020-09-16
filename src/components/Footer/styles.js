import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const FooterWrapper = styled.div`
    background-color: ${(props) => props.theme.header.backgroundColor};
    color: ${(props) => props.theme.header.color};
    position: absolute;
    width: 100%;
    margin: unset;
    height: 50px;
`;

const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        height: '100%',
    },
    socialIcons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleSocialIcon: {
        marginRight: '10px',
    },
    copyright: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
    },
}));

export { FooterWrapper, useStyles };
