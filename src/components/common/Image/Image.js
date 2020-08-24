import styled from 'styled-components';

const Image = styled.img`
    width: ${(props) => props.theme.image.width};
    height: ${(props) => props.theme.image.height};
    margin: ${(props) => props.theme.image.margin};
    color: ${(props) => props.theme.image.color};
`;

export default Image;
