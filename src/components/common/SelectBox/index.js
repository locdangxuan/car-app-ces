import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
        height: '20px',
        margin: '0 0 0 10px',
        width: '100%',
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Span>Category</Span>
            <Select
                className={classes.selectEmpty}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Age"
                fontS
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}
