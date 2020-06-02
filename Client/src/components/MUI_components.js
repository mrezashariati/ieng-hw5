import React from 'react';
import { TextField, MenuItem, makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     field: {
//         margin: theme.spacing(1),
//         minWidth: 150,
//     },
// }));

class NormalField extends React.Component {

    render() {
        return (
            <TextField id="outlined-basic" label={this.props.name} variant="outlined"
                onChange={this.props.onChange} />
        );
    }
}

class SelectField extends React.Component {
    render() {
        return (
            <TextField select onChange={this.props.onChange}
                id="outlined-basic" label={this.props.name} variant="outlined" >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </ TextField>
        );
    }
}

export { NormalField, SelectField };

