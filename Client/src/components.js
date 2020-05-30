import React from 'react';
import { TextField, FormControl, Select, MenuItem, InputLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function NormalField() {
    const classes = useStyles();
    return (
        <TextField className={classes.formControl}
        id="outlined-basic" label="Field" variant="outlined" />
    );
}

function SelectField() {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl} variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Number</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Number"
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

export { NormalField, SelectField };

