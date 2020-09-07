import React from 'react';
import { NativeSelect } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Color from 'config/constants/Colors';
import FormControl from '@material-ui/core/FormControl';
import { Span } from 'components/common';

const useStyles = makeStyles(() => ({
    formControl: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: 120,
        margin: '20px 0 0 0',
    },
    selectEmpty: {
        padding: 0,
        height: '25px',
        margin: '0 0 0 15px',
        width: '100%',
        border: '1px solid #fff',
        color: Color.white,
        background: Color.backgroundInput,
    },
    option: {
        color: Color.black,
    },
}));

const SimpleSelect = (props) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const { name } = props;
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Span>{name}</Span>
            <NativeSelect
                value={age}
                onChange={handleChange}
                name="age"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}
            >
                <option className={classes.option} value="">
                    None
                </option>
                <option className={classes.option} value={10}>
                    Ten
                </option>
                <option className={classes.option} value={20}>
                    Twenty
                </option>
                <option className={classes.option} value={30}>
                    Thirty
                </option>
            </NativeSelect>
        </FormControl>
    );
};

export default SimpleSelect;

SimpleSelect.propTypes = {
    name: PropTypes.string,
};

SimpleSelect.defaultProps = {
    name: '',
};
