import React from 'react';
import { NativeSelect, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './styles';

const SelectBox = (props) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const { name } = props;
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Box component="span" className={classes.name}>
                {name}
            </Box>
            <NativeSelect
                value={age}
                onChange={handleChange}
                name="age"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}
            >
                <option className={classes.option} value="">
                    All
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

export default SelectBox;

SelectBox.propTypes = {
    name: PropTypes.string,
};

SelectBox.defaultProps = {
    name: '',
};
