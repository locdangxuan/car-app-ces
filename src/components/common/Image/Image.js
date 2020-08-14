import styled from 'styled-components';

const Image = styled.img`
    width: ${(props) => props.theme.image.width};
    height: ${(props) => props.theme.image.height};
    margin-left: 10px;
`;

export default Image;
