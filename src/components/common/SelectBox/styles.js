import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { fontFamilies, fontSize } from 'config/constants/Fonts';
import Color from 'config/constants/Colors';
import { NativeSelect } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    formControl: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: 120,
        marginTop: '20px',
    },
    selectEmpty: {
        height: '25px',
        marginLeft: '30px',
        width: '100%',
        border: `1px solid ${Color.white}`,
        color: Color.white,
        background: Color.backgroundInput,
    },
    name: {
        width: '100px',
        fontFamily: fontFamilies.ssfLucida,
        fontSize: fontSize.fontMedium,
    },
}));

export const CustomNativeSelect = styled(NativeSelect)`
    .MuiNativeSelect-root {
        padding: 5px;
    }
`;

export const Option = styled.option`
    color: ${Color.black};
`;
export default useStyles;
