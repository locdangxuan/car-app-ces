/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Item, CarouselWrapper } from './styles';

const Carousel = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
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
                <Item>First Cart</Item>
                <Item>First Cart</Item>
                <Item>First Cart</Item>
                <Item>First Cart</Item>
            </ItemsCarousel>
        </CarouselWrapper>
    );
};

export default Carousel;
