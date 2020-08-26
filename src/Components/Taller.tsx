import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const useStyles =  makeStyles((theme) => ({
  root: {
    width: 300,
    margin: 3
  },
  title: {
    fontSize: 14,
  },
  margin: {
    margin: theme.spacing(1),
  },
  buton: {
    margin: theme.spacing(1),
    textTransform: 'none',
  },
}));

interface  Props {
  titulo?: string;
  accion?: string;
};

  
export const Taller: React.FC<Props> = ({ titulo }) => {

    const classes = useStyles();

    return(
      <Card className={classes.root}>
        <CardContent >
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {titulo}
          </Typography>
        </CardContent>
        <CardActions >
          <TextField fullWidth id="standard-textarea" label="Registro de servicio" placeholder="Placeholder" 
                    name="descripcion" multiline />
        </CardActions>
        <CardActions >
          <Button fullWidth
        color="default"
        className={classes.buton}
        startIcon={<AddIcon />}
      >
        Registrar Servicio
      </Button>
        </CardActions>
      </Card>

    )
}

export default Taller;