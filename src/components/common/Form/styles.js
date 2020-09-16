import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import globalTheme from 'config/constants/Themes';
import color from 'config/constants/Colors';

const Wrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.color.white};
    width: 60%;
    align-items: center;
    opacity: 0.95;
`;

const Submit = styled.section`
    margin: 30px;
    display: flex;
    bottom: 0;
    width: 30%;
    align-items: center;
    justify-content: space-between;
`;

const useStyle = makeStyles(() => ({
    dualLine: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    selector: {
        marginRight: '7%',
        width: '44%',
        height: '40px',
    },
}));

const theme = {
    span: {
        margin: '11px 4px 0 0',
        width: '30%',
        color: color.black,
    },
    input: {
        ...globalTheme.input,
        inputWidth: '100%',
        fontColor: color.black,
        margin: '11px 0 0',
        height: '30px',
    },
    field: {
        width: '600px',
        margin: '16px 0 0',
    },
    imageCard: {
        width: '200px',
        height: '100px',
    },
};
export { Wrapper, Submit, useStyle, theme };
