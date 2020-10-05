import styled from 'styled-components';

const Textarea = styled.textarea`
    display: flex;
    ${(props) => props.theme.font};
    rows: ${(props) => (props.rows ? props.rows : '4')};
    cols: ${(props) => (props.cols ? props.cols : '80')};
    height: ${(props) => {
        if (props.heightToggle) return props.heightToggle;
        return props.theme.textarea ? props.theme.textarea.height : '60px';
    }};
    width: ${(props) =>
        props.theme.textarea ? props.theme.textarea.width : '30vw'};
    resize: none;
    margin: ${(props) =>
        props.theme.textarea ? props.theme.textarea.margin : '0 0 0 33px'};
    border: ${(props) =>
        props.theme.textarea ? props.theme.textarea.border : ''};
    background-color: ${(props) =>
        props.theme.textarea
            ? props.theme.textarea.backgroundColor
            : props.theme.color.white};
    color: ${(props) =>
        props.theme.textarea
            ? props.theme.textarea.color
            : props.theme.color.black};
    overflow: hidden;
    font: ${(props) => {
        if (props.theme.textarea) return props.theme.textarea.font;
    }};
`;

export default Textarea;
