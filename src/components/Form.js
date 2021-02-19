import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
    },

    typography: {
        padding: theme.spacing(2),
    },
  }));


export default function Form(props) {
    const classes = useStyles();
    const subject = props.subject;
    const [name, setName] = useState('');

    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    //   };
    
    //   const handleClose = () => {
    //     setOpen(false);
    //   };

 
    
    function handleChange(e) {
        setName(e.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault();
            props.addWorkout(name);
            setName("");
    }

    return (
  
    <div className={"classes.root"}>
        <Grid container spacing={1} className={classes.typography}>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Hallo {subject},
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                    Lust auf Bizeps? Kein Bock mehr auf Trainingspläne! Lass den Zufall über dein Workout entscheiden!
                </Typography>
            </Grid>
        </Grid>

        {/* <Paper variant="outlined" className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    Welche Übungen willst du heute machen?
                </Grid>
                <Grid item xs={12}>                
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Jetzt Workout auswählen!
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Workout auswählen!</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Lust auf Bizeps? Kein Bock mehr auf Trainingspläne! Lass den Zufall über dein Workout entscheiden! Um zu starten, muss du nur diese Fragen beantworten!
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Wie heißt du?"
                                type="text"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Abbrechen
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Bestätigen
                            </Button>
                        </DialogActions>
                </Dialog>
                </Grid>
            </Grid>
        </Paper> */}


        <Paper variant="outlined" className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    Welche Übungen willst du heute machen?
                </Grid>
                <Grid item xs={6} container justify="space-around" alignItems="center">                
                    <Select
                        value={name}
                        onChange={handleChange}
                    >
                        <MenuItem value="Test1">Test1</MenuItem>
                        <MenuItem value="Test2">Test2</MenuItem>
                        <MenuItem value="Test3">Test3</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={6} container justify="space-around" alignItems="center">
                    <Button size="medium" onClick={handleSubmit} type="submit" variant="contained" color="primary">Add</Button>
                </Grid> 
            </Grid>
        </Paper>
    </div>
    );
  }
  
  