import 'fontsource-roboto';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
import WorkoutAbgeschlossen from './WorkoutAbgeschlossen';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  typography: {
      padding: theme.spacing(2),
  },

  paper: {
    justifyContent: "center",
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(12),
      height: theme.spacing(12),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",  
    },
  },
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
    const headingText1 = `Anzahl an Aktionen: ${anzahlWorkouts}`
    console.log("Anzahl der Aktionen: ", anzahlWorkouts);

    // const workoutNoun = workoutList.length !== 1 ? "Übungen" : "Übung";
    const headingText2 = `Anzahl an Übungen: ${workoutList.length}`;
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

  const [count, setCount] = useState(3);

    // const decrementCount = () => {
    //     setCount(count - 1);
    //     // if (count <= 0) return alert("Geht nicht mehr");
    //     console.log(setCount);
    // }


  function shuffleWorkouts() {
    if (count <= 0) return alert("Geht nicht mehr! Du hast dein Glück durchgespielt!");
    setCount(count - 1);
    workouts.forEach(workout => (workout.anzahl = getNumberOfWorkouts(1, 6)));
    setWorkouts([...workouts]);
  }

  function workoutBeenden() {
    
    console.log({anzahlWorkouts});
    if (anzahlWorkouts === 0) {
      alert("Das Workout ist beendet! Gut gemacht");
      window.location.href = "/workout-abgeschlossen"
    } else {
      alert("Das Workout ist nicht beendet!");
    }
  }

  const Home = () => (
    <div className={classes.root}>
      <Form subject = {subject}
            addWorkout = {addWorkout}/>

      <Grid container spacing={1} className={classes.typography}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            <strong>Dein Workout:</strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Hier siehst du dein Workout, welches du ausführen musst.
          </Typography>
        </Grid>
      </Grid>    
        {workoutList}
      <Shufflebutton  shuffleWorkouts={shuffleWorkouts}
                      count = {count}
      
      />

      <Grid container spacing={1} justify="space-around" alignItems="center" className={classes.typography}>
        <Grid xs={12} spacing={1}>
          <Typography variant="h6" gutterBottom>
            <strong>Deine Statistiken:</strong>
          </Typography>
        </Grid>
        <Grid xs={12} spacing={1}  className={classes.paper}>    
          <Paper variant="outlined">     
            {headingText1}
          </Paper>
          <Paper variant="outlined">
            {headingText2}
          </Paper>
        </Grid>
        

        <Grid item xs={12} spacing={1} container justify="space-around" alignItems="center">
          <Button size="medium" variant="contained" color="primary" onClick={workoutBeenden} type="submit">
            Workout beenden
          </Button>
        </Grid>
      </Grid>
        <Typography>{count}</Typography>

        <Divider variant="middle" />
        
    </div>
  
);

  
  return (
    <Router>
      <div className={classes.pusho}>       
          <Appbar />
          <Container maxWidth="sm">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/workout-abgeschlossen" component={WorkoutAbgeschlossen} />
            </Switch>
            <Impressum />
          </Container>
      </div>
    </Router>
    );
}

export default App;
