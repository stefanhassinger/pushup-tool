import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    typography: {
        padding: theme.spacing(2),
    }
  }));

export default function ShuffleButton(props) {
    
    const classes = useStyles();
    const count = props.count;

    function handleSubmit(e) {
        e.preventDefault();
        props.shuffleWorkouts(); 
    }

    return(
    <div className={classes.root}>
        <Grid container spacing={1} className={classes.typography}>
            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                    <strong>Workout shufflen:</strong>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">
                    Unzufrieden? Hier kannst du dein Workout durchshufflen lassen!
                </Typography>
            </Grid>
            <Grid item container xs={12} alignItems="center" justify="space-around">    
                <ShuffleIcon fontSize="large"
                    onClick={handleSubmit} variant="contained" color="primary" type="submit" className="btn btn-shuffle">
                        Workout shufflen
                </ShuffleIcon>
            </Grid>
            <Grid item container xs={12} alignItems="center" justify="space-around">
                <Typography variant="caption" display="block">
                    Du hast noch {count} Versuche frei, um dein Workout zu bestimmen
                </Typography>
            </Grid>
        </Grid>
        <Divider variant="middle" />  
    </div>
    );
}