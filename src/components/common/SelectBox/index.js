import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import component from 'config/constants/Components';
import variant from 'config/constants/Variant';
import useStyles, { Option, CustomNativeSelect } from './styles';

const SelectBox = (props) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const { name } = props;
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl variant={variant.outlined} className={classes.formControl}>
            <Box component={component.span} className={classes.name}>
                {name}
            </Box>
            <CustomNativeSelect
                value={age}
                onChange={handleChange}
                name="age"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}
            >
                <Option value="">All</Option>
                <Option>Ford</Option>
                <Option>Audi</Option>
                <Option>Ferrari</Option>
                <Option>Acura</Option>
            </CustomNativeSelect>
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
