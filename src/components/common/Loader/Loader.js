import React from 'react';
import { Span } from 'components/common';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Circle, MiniCircle, Wrapper, FullpageWrapper } from './Loader.Styles';

const Loader = (props) => {
    const content = (theme = {}) => (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
    switch (props.type) {
        case 'SPAN-STYLE':
            return (
                <Wrapper>
                    {content()}
                    <Span>Loading</Span>
                </Wrapper>
            );
        case 'FULL-PAGE': {
            const theme = {
                loader: {
                    width: '70px',
                    height: '70px',
                },
            };
            return <FullpageWrapper>{content(theme)}</FullpageWrapper>;
        }
        default:
            return <Wrapper>{content()}</Wrapper>;
    }
};
Loader.propTypes = {
    type: PropTypes.string,
};
Loader.defaultProps = {
    type: 'SPAN-STYLE',
};

export default Loader;
