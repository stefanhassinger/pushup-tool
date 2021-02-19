//Things to do: 
//3. Styling
//4. Pop-Up-Menü zum eintragen: Name, Höchstanzahl der Übungen, Auswahl der Übungen,

import 'fontsource-roboto';
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Workout from "./components/Workout";
import Shufflebutton from "./components/Shufflebutton";
import Impressum from "./components/Impressum";
import Form from "./components/Form";
import Appbar from './components/Appbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  typography: {
      padding: theme.spacing(1),
  }
}));


function App(props) {
  const [workouts, setWorkouts] = useState(props.workouts);
  const classes = useStyles();
  
  const subject = props.subject;

    const workoutList = workouts.map(workout => (
      <Workout
          id={workout.id}
          name={workout.name}
          anzahl={workout.anzahl}
          key={workout.id}
          deleteWorkout={deleteWorkout}
          editWorkout={editWorkout}
          shuffleWorkouts={shuffleWorkouts}
        />
      )
    );

    const anzahlWorkouts = workouts.reduce(function(prev, cur) {
      return prev + cur.anzahl;
    }, 0);
    const headingText1 = `${anzahlWorkouts} Aktionen`
    console.log("Anzahl der Aktionen: ", anzahlWorkouts);

    const workoutNoun = workoutList.length !== 1 ? "Übungen" : "Übung";
    const headingText2 = `${workoutList.length} ${workoutNoun}`;
    console.log("Anzahl der Übungen: ", workoutList.length);

  function getNumberOfWorkouts(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random_number = Math.floor(Math.random() * (max-min +1)) +min;
    return 10*random_number
  };

  console.log("Number of Workouts: ", getNumberOfWorkouts(1, 6));

  function addWorkout(name) {
    console.log("Name: ", name);
    const newWorkout = {id: "todo-" + nanoid(), name: name, anzahl: getNumberOfWorkouts(1, 6)};
    setWorkouts([...workouts, newWorkout]);
  }


  function deleteWorkout(id) {
    console.log("ID: ", id);
    const remainingWorkouts = workouts.filter(workout => id !== workout.id);
    setWorkouts(remainingWorkouts);
  }

  function editWorkout(id, newName) {
    const editedWorkoutList = workouts.map(workout => {
      if (id === workout.id) {
        return {...workout, name: newName}
      }
      return workout;
    });
    setWorkouts(editedWorkoutList);
  }

  function shuffleWorkouts() {
    workouts.forEach(workout => (workout.anzahl = getNumberOfWorkouts(1, 6)));
    setWorkouts([...workouts]);
  }

  function workoutBeenden() {
    console.log({anzahlWorkouts});
    if (anzahlWorkouts === 0) {
      alert("Das Workout ist beendet! Gut gemacht");
    } else {
      alert("Das Workout ist nicht beendet!");
    }
  }

  
  return (
    <div className="pusho">

      <Appbar />

      <Container maxWidth="sm">
        <Form subject = {subject}
              addWorkout = {addWorkout}/>
              <Grid className={classes.typography} item xs={12} spacing={1}>
                <Typography variant="h6" gutterBottom>Dein Workout:</Typography>
              </Grid>
                 
            {workoutList}
          <Shufflebutton shuffleWorkouts={shuffleWorkouts}/>

          <div className="pusho-result">
            <Grid className={classes.typography} item xs={12} spacing={1}>
              <Typography variant="h6" gutterBottom>
                Deine Statistiken:
              </Typography>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={6} container justify="space-around" alignItems="center">
                <ol>
                  <li>{headingText1}</li>
                  <li>{headingText2}</li>
                </ol>
              </Grid>
              <Grid item xs={6} container justify="space-around" alignItems="center">
                  <Button size="medium" variant="contained" color="primary" onClick={workoutBeenden} type="submit">
                    Workout beenden
                  </Button>
              </Grid>
            </Grid>
            <Divider variant="middle" />
          </div> 
          <Impressum />
      </Container>
    </div>
  );
}

export default App;
