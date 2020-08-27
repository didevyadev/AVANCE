import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ActionButton from './ActionButton';

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
        <ActionButton />
      </Card>

    )
}

export default Taller;