import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useStyles, PrettoSlider } from './styles';

const RangeSlider = (props) => {
    const classes = useStyles();
    const { display, name, min, max, onChange } = props;
    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                {display}
            </Typography>
            <PrettoSlider
                name={name}
                min={parseInt(min, 10)}
                max={parseInt(max, 10)}
                valueLabelDisplay="auto"
                defaultValue={[parseInt(min, 10), parseInt(max, 10)]}
                onChange={(event, newValue) => onChange(name, newValue)}
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
};

RangeSlider.defaultProps = {
    display: '',
    name: '',
    min: '0',
    max: '0',
    onChange: () => {},
};

export default RangeSlider;
