import color from 'config/constants/Colors';
import { fontMain } from 'config/mixins/Fonts';

const button = {
    borderColor: color.darkGrey,
    width: '100px',
    height: '30px',
    border_radius: '4px',
};
const input = {
    noBorder: 'true',
    inputWidth: '100%',
    backgroundColor: color.transparent,
    margin: '9px 0',
    outline: 'none',
    border_radius: '0',
};

const span = {
    display: 'flex',
    margin: '0 13px 17px',
    text_align: 'center',
};

const globalTheme = {
    button,
    input,
    span,
    color: {
        ...color,
    },
    font: fontMain,
};

export default globalTheme;
