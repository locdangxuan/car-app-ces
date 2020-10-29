import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useStyles, PrettoSlider } from './styles';

const RangeSlider = (props) => {
    const classes = useStyles();
    const { display, name, min, max, onChange, step } = props;
    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                {display}
            </Typography>
            <br />
            <br />
            <PrettoSlider
                name={name}
                min={parseInt(min, 10)}
                max={parseInt(max, 10)}
                defaultValue={[parseInt(min, 10), parseInt(max, 10)]}
                onChange={(event, newValue) => onChange(name, newValue)}
                valueLabelDisplay="on"
                step={step}
            />
        </div>
    );
};

RangeSlider.propTypes = {
    name: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    display: PropTypes.string,
    onChange: PropTypes.func,
    step: PropTypes.number,
};

RangeSlider.defaultProps = {
    display: '',
    name: '',
    min: '0',
    max: '0',
    onChange: () => {},
    step: 1,
};

export default RangeSlider;
