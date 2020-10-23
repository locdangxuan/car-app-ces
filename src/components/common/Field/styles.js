import styled from 'styled-components';

const Field = styled.section`
    display: flex;
    flex-direction: column;
    width: ${(props) =>
        props.theme.field.width ? props.theme.field.width : '600px'};
    margin: ${(props) =>
        props.theme.field.margin ? props.theme.field.margin : '0'};
    align-items: end;
`;

export default Field;
