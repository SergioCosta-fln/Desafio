import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    position: 'fixed',
    width: '100%',
    align: 'center',
    padding: theme.spacing(2, 0),
    color: '#fff',
    backgroundColor: '#303f9f'
  },
}));

const Footer = () =>{
    const classes = useStyles();

    return (

          <footer className={classes.footer}>
            <Container maxWidth="sm">
              <Typography variant="h6" align="center">React - Desafio 01</Typography>
            </Container>
          </footer>
      );

}
export default Footer