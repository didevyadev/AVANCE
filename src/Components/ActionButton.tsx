import React, { useState } from 'react';
import CardActions from '@material-ui/core/CardActions';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles =  makeStyles((theme) => ({
    buton: {
      margin: theme.spacing(1),
      textTransform: 'none',
    },
  }));

interface  Props {
    AddButton?: any;
    AddForm?: any;
    openForm?: any;
    AgregarButton?: any;
    closeForm?: any;
    handleKeyPress?: any;
}
export const ActionButton: React.FC<Props> = ({AddButton, AddForm, openForm, AgregarButton, closeForm, handleKeyPress}) => {

    const classes = useStyles();
    const [formOpen,setformOpen] = useState(false);

    openForm = () =>{
        setformOpen(true)
    }

    closeForm = () =>{
        setformOpen(false)
    }

    AddButton = () => {
        return(
            <CardActions >
            <Button onClick={ openForm } fullWidth color="default" className={classes.buton} startIcon={<AddIcon />} >
                Registrar Servicio
            </Button>
            </CardActions>
        )
    }

    AgregarButton = () => {
        return(
            <CardActions >
            <Button onClick={ closeForm } fullWidth color="default" className={classes.buton} startIcon={<AddIcon />} >
                Guardar
            </Button>
            <IconButton onClick={ closeForm } color="default" className={classes.buton}>
                <CloseIcon />
            </IconButton>
            </CardActions>
        )
    }

    handleKeyPress = (event: any) => {
        if(event.which === 13){ closeForm(); }
    }
    
    AddForm = () =>{
        return (
            <CardContent >
            <CardActions >
            <TextField fullWidth id="standard-textarea" label="Registro de servicio" placeholder="Placeholder" 
                  name="descripcion" multiline onKeyPress={handleKeyPress}/>
            </CardActions>
            <AgregarButton />
            </CardContent>
        )
    }
    
    return formOpen ? AddForm() : AddButton();
}
export default ActionButton;