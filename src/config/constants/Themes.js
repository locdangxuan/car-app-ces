import { darkGrey, transparent } from 'config/constants/Colors';

const button = {
    color: 'black',
    borderColor: darkGrey,
    width: '100px',
    height: '30px',
};
const input = {
    noBorder: 'true',
    fontSize: '13px',
    inputWidth: '100%',
    backgroundColor: transparent,
};

const globalTheme = {
    ...button,
    ...input,
};

export default globalTheme;
