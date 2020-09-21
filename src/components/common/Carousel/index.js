/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import PropTypes from 'prop-types';
import { Item, CarouselWrapper } from './styles';

const Carousel = (props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    const { images } = props;
    const imageUrls = Object.values(images);

    return (
        <CarouselWrapper>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={5}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {imageUrls &&
                    imageUrls.map((imageUrl) => {
                        return (
                            <Item key={imageUrl} backgroundImage={imageUrl} />
                        );
                    })}
            </ItemsCarousel>
        </CarouselWrapper>
    );
};

Carousel.propTypes = {
    images: PropTypes.object,
};

Carousel.defaultProps = {
    images: {},
};

export default Carousel;
