import React from 'react';
import { Span } from 'components/common';
import { Circle, MiniCircle, Wrapper } from './Loader.Styles';

const Loader = () => (
    <Wrapper>
        <Circle>
            <MiniCircle />
            <MiniCircle rotateDegree="30deg" delayDuration="-1.1s" />
            <MiniCircle rotateDegree="60deg" delayDuration="-1.0s" />
            <MiniCircle rotateDegree="90deg" delayDuration="-0.9s" />
            <MiniCircle rotateDegree="120deg" delayDuration="-0.8s" />
            <MiniCircle rotateDegree="150deg" delayDuration="-0.7s" />
            <MiniCircle rotateDegree="180deg" delayDuration="-0.6s" />
            <MiniCircle rotateDegree="210deg" delayDuration="-0.5s" />
            <MiniCircle rotateDegree="240deg" delayDuration="-0.4s" />
            <MiniCircle rotateDegree="270deg" delayDuration="-0.3s" />
            <MiniCircle rotateDegree="300deg" delayDuration="-0.2s" />
            <MiniCircle rotateDegree="330deg" delayDuration="-0.1s" />
        </Circle>
        <Span>Loading</Span>
    </Wrapper>
);

export default Loader;
