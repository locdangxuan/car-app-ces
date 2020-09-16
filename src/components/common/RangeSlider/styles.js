import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';
import Color from 'config/constants/Colors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const PrettoSlider = withStyles({
    root: {
        color: Color.rangeSliderColor,
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: Color.white,
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

export { useStyles, PrettoSlider };
