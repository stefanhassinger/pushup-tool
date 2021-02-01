import React, {useState} from "react";

export default function Workout(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editWorkout(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (

    <li className="workout-list">
      <input 
        id={props.id} 
        type="text"
        value={newName}
        onChange={handleChange}
      />
      <button 
        type="button"
        className="btn btn__cancel"
        onClick={() => setEditing(false)}
      >
        Cancel {props.name}!
      </button>
      <button
        type="button"
        className="btn btn_save"
        onClick={handleSubmit}
      >
        Save!
      </button>
    </li>
 
  );

  const viewTemplate = (
    <li className="workout-list">
      <label htmlFor={props.id}>Anzahl der {props.name}: {props.anzahl}</label>
      <button 
        type="button"
        className="btn btn__delete"
        onClick={() => props.deleteWorkout(props.id)}
      >
        {props.name} fertig!
      </button>
      <button
        type="button"
        className="btn btn_delete"
        onClick={() => setEditing(true)}
      >
        Edit!
      </button>
    </li>
  );
  
  return <div className="todo">{isEditing ? editingTemplate : viewTemplate}</div>;




    // <li className="workout-list">
    //   <label htmlFor={props.id}>Anzahl der {props.name}: {props.anzahl}</label>
    //   <button 
    //     type="button"
    //     className="btn btn__delete"
    //     onClick={() => props.deleteWorkout(props.id)}
    //   >
    //     {props.name} fertig!
    //   </button>
    //   <button
    //     type="button"
    //     className="btn btn_delete"

    //   >
    //     Edit!
    //   </button>
    // </li>
}





// import React, { useState } from "react";


// export default function Workout() {

//     // function getNumberOfWorkouts(min, max) {
//     //   min = Math.ceil(min);
//     //   max = Math.floor(max);
//     //   const random_number = Math.floor(Math.random() * (max-min +1)) + min;
//     //   return 10*random_number
//     // };

//     // const workout_one = getNumberOfWorkouts(1, 6);
//     // const workout_two = getNumberOfWorkouts(1, 6);
//     // const workout_three = getNumberOfWorkouts(1, 6);

//     // const sum_workouts = workout_one + workout_two + workout_three;

    

//     // const [random, setRandom] = useState(0);

//     // const getNumberOfWorkouts = (min, max) => {
//     //   min = 1;
//     //   max = 6;
//     //   const random_number = (Math.floor(Math.random() * (max-min + 1)) + min) *10;
//     //   setRandom(random_number);
//     // };

//     // console.log("random: " + random);
//     // console.log("setRandom: " + setRandom);

    
//     return (
//       <div className="pusho-app">
//         <div className="pusho-start-button">
//           <p>Jetzt dein Workout starten!</p>
//           <button onClick={getNumberOfWorkouts} type="submit" className="btn btn-start">Workout starten</button>
//         </div>


//         <div className="pusho-list">
//           <h2>Dein Workout:</h2>
//           <li className="workout-list">
//             <label>Anzahl der Push-Ups: {random}</label>
//             <button type="button" className="btn btn__delete">
//               Delete Push-Ups
//             </button>
//           </li>
//           <li className="workout-list">
//             <label>Anzahl der Sit-Ups: {random}</label>
//             <button type="button" className="btn btn__delete">
//               Delete Sit-Ups
//             </button>
//           </li>
//           <li className="workout-list">
//             <label>Anzahl der Jumping-Jacks: {random}</label>
//             <button type="button" className="btn btn__delete">
//               Delete Jumping-Jacks
//             </button>
//           </li>
//         </div>

//         <div className="pusho-result">
//           <p>Ergebnis: Du hast insgesamt Aktionen ausgeführt!</p>

//         </div>
//         <div className="pusho-end-button">
//           <button type="submit" className="btn btn-end">Workout beenden</button>
//         </div>
//       </div>
//     );
//   }