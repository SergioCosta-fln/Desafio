import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginTop: '10px',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 230,
          },
    },
}));

const About = () => {

    const classes = useStyles();

    return (
    <form className={classes.title} noValidate autoComplete="off">
               <h1>Desafio React - Wattei Tecnologia</h1>
    </form>

    )    
}

export default About