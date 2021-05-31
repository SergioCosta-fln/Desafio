import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

const User = () => {
  
  const classes = useStyles();

  return (
    <form className={classes.title} noValidate autoComplete="off">
        <TextField label="Nome" id="standart-size-small" variant="standard" multiline="false" defaultValue="Sergio" />
        <TextField label="Telefone" id="standart-size-small" variant="standard" multiline="false" defaultValue="(48) 9-9965-7020" />
        <TextField label="E-mail" id="standart-size-small" variant="standard" multiline="false" defaultValue="sergiocosta.fln@gmail.com" />

    </form>
  );
}

export default User