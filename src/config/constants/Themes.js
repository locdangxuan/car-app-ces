import color from 'config/constants/Colors';
import { fontMain } from 'config/mixins/Fonts';

const button = {
    borderColor: color.darkGrey,
    width: '100px',
    height: '30px',
    borderRadius: '4px',
    margin: '0 0 0 10px',
};

const input = {
    noBorder: 'true',
    inputWidth: '100%',
    backgroundColor: color.transparent,
    margin: '9px 0',
    outline: 'none',
    borderRadius: '0',
};

const span = {
    display: 'flex',
    margin: '0 13px 17px',
    text_align: 'center',
};

const image = {
    width: '100%',
    height: '100%',
    margin: '0 0 0 5px',
};

const header = {
    backgroundColor: color.backgroundHeader,
    color: color.white,
};

const globalTheme = {
    button,
    input,
    span,
    header,
    image,
    color: {
        ...color,
    },
    font: fontMain,
};

export default globalTheme;
