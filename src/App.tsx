import React from 'react';
import Taller from './Components/Taller';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root2: {
    flexGrow: 1,
  },
  control:{
    padding: 50,
  }
});

function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root2} spacing={5}>
        <Grid item xs={12}>
          <Grid container justify="center"> 
          <Grid>
            <Taller titulo="TALLER" accion="Agregar" />
            </Grid>
            <Grid>
            <Taller titulo="PIEZA" accion="Agregar" />
            </Grid>
            <Grid>
            <Taller titulo="INTERNET" accion="Agregar"/>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
