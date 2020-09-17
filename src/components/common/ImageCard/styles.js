import styled from 'styled-components';

const Background = styled.section`
    display: flex;
    width: 95%;
    height: 95%;
    background-image: url(${(props) => props.imgSrc});
    background-size: cover;
    background-position: center;
    justify-content: flex-end;
`;
const Wrapper = styled.section`
    margin: 10px;
    padding: 4px;
    width: ${(props) =>
        props.theme.imageCard.width ? props.theme.imageCard.width : '16vw'};
    height: ${(props) =>
        props.theme.imageCard.height ? props.theme.imageCard.height : '38vh'};
    background: ${(props) => props.theme.color.transparent};
`;
export { Wrapper, Background };
