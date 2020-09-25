import styled from 'styled-components';

const Textarea = styled.textarea`
    ${(props) => props.theme.font};
    rows: ${(props) => (props.rows ? props.rows : '4')};
    cols: ${(props) => (props.cols ? props.cols : '80')};
    margin-left: 33px;
    overflow-x: auto;
`;

export default Textarea;
