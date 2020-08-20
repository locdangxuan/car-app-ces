import styled from 'styled-components';

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

export { Wrapper, Submit };
