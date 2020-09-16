import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useStyles, PrettoSlider } from './styles';

const RangeSlider = (props) => {
    const classes = useStyles();
    const { name, min, max } = props;
    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                {name}
            </Typography>
            <PrettoSlider
                min={parseInt(min, 10)}
                max={parseInt(max, 10)}
                valueLabelDisplay="auto"
                defaultValue={[parseInt(min, 10), parseInt(max, 10)]}
            />
        </div>
    );
};

RangeSlider.propTypes = {
    name: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
};

RangeSlider.defaultProps = {
    name: '',
    min: '0',
    max: '0',
};

export default RangeSlider;
