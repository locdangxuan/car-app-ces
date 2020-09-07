import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Slider } from '@material-ui/core';
import PropTypes from 'prop-types';

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
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
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
    span: {
        color: 'white',
    },
})(Slider);

export default function TrackFalseSlider(props) {
    const classes = useStyles();
    const { name, min, max, defaultValue } = props;
    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                {name}
            </Typography>
            <PrettoSlider
                min={parseInt(min, 10)}
                max={parseInt(max, 10)}
                valueLabelDisplay="auto"
                defaultValue={defaultValue.split(',')}
            />
        </div>
    );
}

TrackFalseSlider.propTypes = {
    name: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    defaultValue: PropTypes.string,
};

TrackFalseSlider.defaultProps = {
    name: '',
    min: '0',
    max: '0',
    defaultValue: '[0, 0]',
};
