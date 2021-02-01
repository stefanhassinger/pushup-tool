//Things to do: 
//2. Github nutzen
//3. Styling
//4. Pop-Up-Menü zum eintragen: Name, Höchstanzahl der Übungen, Auswahl der Übungen,

import React, { useState } from "react";
import { nanoid } from "nanoid";
import Workout from "./components/Workout";
import Shufflebutton from "./components/Shufflebutton";
import Form from "./components/Form";

function App(props) {
  const [workouts, setWorkouts] = useState(props.workouts);
  
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
      <header className="pusho-header">
        App: Pusho
      </header>

      <Form subject = {subject}
            addWorkout = {addWorkout}/>

      
      <div className="pusho-app">       
        <div className="pusho-list">
          <h2>Dein Workout:</h2>
          {workoutList}
        </div>

        <Shufflebutton shuffleWorkouts={shuffleWorkouts}/>

        <div className="pusho-result">
          <p>Um dein Workout beenden zu können, musst du nur noch...</p>
          <ol>
            <li>{headingText1}</li>
            <li>{headingText2}</li>
          </ol>
          <p>machen!</p>
        </div>

        <div className="pusho-end-button">
          <button onClick={workoutBeenden} type="submit" className="btn btn-end">Workout beenden</button>
        </div>
      </div>
    </div>
  );
}

export default App;
