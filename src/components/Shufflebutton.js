import React from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function ShuffleButton(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.shuffleWorkouts();
    }

    return(
    <div className="pusho-shuffle-button">
        <Typography variant="body1" gutterBottom>
            Du bist dem aktuellen Workout unzufrieden? Dann shuffle dein Workout
        </Typography>

        <Button onClick={handleSubmit} variant="contained" color="primary" type="submit" className="btn btn-shuffle">
            Workout starten
        </Button>
    </div>
    );
}