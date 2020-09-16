import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from 'components/common';
import color from 'config/constants/Colors';
import PropTypes from 'prop-types';
import Delete from 'assets/images/trash.svg';
import Wrapper from './styles';

const ImageCard = (props) => {
    const { imgSrc, removeImage, index } = props;
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
        removeImage(index);
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
    index: PropTypes.number,
};
ImageCard.defaultProps = {
    imgSrc: '',
    removeImage: {},
    index: '0',
};

export default ImageCard;
