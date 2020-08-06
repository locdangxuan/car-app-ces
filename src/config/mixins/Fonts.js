import { fontFamilies, fontSize, fontWeight } from 'config/constants/Fonts';
import { css } from 'styled-components';

const fontHeader = css`
    font-family: ${fontFamilies.monospaceLucida};
    font-size: ${fontSize.fontLarge};
    font-weight: ${fontWeight.bold};
`;

const font = css`
    font-family: ${fontFamilies.ssfLucida};
    font-weight: ${fontWeight.normal};
`;

export { fontHeader, font };
