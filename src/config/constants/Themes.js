import Color from 'config/constants/Colors';
import { fontMain } from 'config/mixins/Fonts';
import { fontSize } from 'config/constants/Fonts';

const button = {
    borderColor: Color.darkGrey,
    width: '140px',
    height: '30px',
    borderRadius: '4px',
    marginLeft: '10px',
    backgroundColor: Color.transparent,
    color: Color.black,
};

const body = {
    color: Color.white,
};

const input = {
    noBorder: 'true',
    width: '100%',
    backgroundColor: Color.transparent,
    margin: '9px 0',
    outline: 'none',
    borderRadius: '0',
};

const span = {
    text_align: 'center',
};

const image = {
    width: '100%',
    height: '100%',
    marginLeft: '5px',
};

const header = {
    backgroundColor: Color.backgroundHeader,
    color: Color.white,
};

const loader = {
    fontSize: fontSize.fontSmall,
};

const globalTheme = {
    button,
    input,
    span,
    header,
    image,
    body,
    loader,
    color: {
        ...Color,
    },
    font: fontMain,
};

export default globalTheme;
