import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    //height: 24,
    //padding: '0 30px',
    textAlign: 'center',
  },
});

const Body = () => {
    const classes = useStyles();
    return (
        <h1 className={classes.root}>React - Desafio 01</h1>
    )
}

export default Body