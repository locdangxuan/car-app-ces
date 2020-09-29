import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, Image } from 'components/common';
import PropTypes from 'prop-types';
import Delete from 'assets/images/trash.svg';
import { Wrapper, Background, theme } from './styles';

const ImageCard = (props) => {
    const { imgSrc, removeImage, index } = props;

    const onClickHandler = () => {
        removeImage(index);
    };
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Background imgSrc={imgSrc}>
                    <Button onClick={onClickHandler}>
                        <Image src={Delete} alt="X" />
                    </Button>
                </Background>
            </Wrapper>
        </ThemeProvider>
    );
};
ImageCard.propTypes = {
    imgSrc: PropTypes.string,
    removeImage: PropTypes.func,
    index: PropTypes.number,
};
ImageCard.defaultProps = {
    imgSrc: '',
    removeImage: () => {},
    index: '0',
};

export default ImageCard;
