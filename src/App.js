import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    }
}))

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Button variant="contained" color="primary" className={classes.button}>click me</Button>
        </div>
    )
}

export default App;
