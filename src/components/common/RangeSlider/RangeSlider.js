import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 250,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const marks = (min, max) => {
    return [
        {
            value: parseInt(min, 10),
            label: parseInt(min, 10),
        },
        {
            value: parseInt(max, 10),
            label: parseInt(max, 10),
        },
    ];
};

function valueText(value) {
    return `${value}`;
}

export default function TrackFalseSlider(props) {
    const classes = useStyles();
    const { name, min, max, defaultValue } = props;
    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                {name}
            </Typography>
            <Slider
                min={parseInt(min, 10)}
                max={parseInt(max, 10)}
                track={false}
                aria-labelledby="range-slider"
                getAriaValueText={valueText}
                defaultValue={defaultValue.split(',')}
                marks={marks(min, max)}
            />
        </div>
    );
}

TrackFalseSlider.propTypes = {
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    defaultValue: PropTypes.arrayOf(PropTypes.number),
};

TrackFalseSlider.defaultProps = {
    name: '',
    min: 0,
    max: 0,
    defaultValue: [0, 0],
};
