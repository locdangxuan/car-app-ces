import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    width: ${(props) =>
        props.theme.imageCard.width ? props.theme.imageCard.width : '200px'};
    height: ${(props) =>
        props.theme.imageCard.height ? props.theme.imageCard.height : '100px'};
    background-image: url(${(props) => props.imgSrc});
    background-size: cover;
    background-position: center;
    justify-content: flex-end;
`;
export default Wrapper;
