import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
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

    function handleSubmit(e) {
        e.preventDefault();
        props.shuffleWorkouts();
    }

    return(
    <div>
        <Grid container className={classes.typography}>
            <Typography variant="h6">
                Unzufrieden?
            </Typography>
            <Grid container>
                <Grid item container xs={6} alignItems="center" justify="space-around">
                    <Typography variant="subtitle1" gutterBottom>
                            Jetzt dein Workout shufflen!
                    </Typography>
                </Grid>
                <Grid item container xs={6} alignItems="center" justify="space-around">    
                    <AddCircleIcon fontSize="large"
                        onClick={handleSubmit} variant="contained" color="primary" type="submit" className="btn btn-shuffle">
                            Workout shufflen
                    </AddCircleIcon>
                </Grid>
            </Grid>
        </Grid>
        <Divider variant="middle" />
    </div>
    );
}