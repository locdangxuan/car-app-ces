import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from 'components/common';
import color from 'config/constants/Colors';
import PropTypes from 'prop-types';
import Delete from 'assets/images/trash.svg';
import Wrapper from './ImageCard.Styles';

const ImageCard = (props) => {
    const { imgSrc, removeImage } = props;
    const theme = {
        button: {
            width: '15%',
            height: '20%',
            fontSize: '12px',
            margin: '0',
            borderColor: color.transparent,
            backgroundColor: color.transparent,
        },
    };
    const onClickHandler = () => {
        removeImage();
    };
    return (
        <ThemeProvider theme={theme}>
            <Wrapper imgSrc={imgSrc}>
                <Button onClick={onClickHandler}>
                    <img src={Delete} alt="X" width="10px" height="10px" />
                </Button>
            </Wrapper>
        </ThemeProvider>
    );
};
ImageCard.propTypes = {
    imgSrc: PropTypes.string,
    removeImage: PropTypes.func,
};
ImageCard.defaultProps = {
    imgSrc: '',
    removeImage: {},
};

export default ImageCard;
