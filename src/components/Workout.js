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
}