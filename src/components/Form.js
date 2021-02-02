import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';


export default function Form(props) {
    const subject = props.subject;
    const [name, setName] = useState('');
    
    function handleChange(e) {
        setName(e.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault();
            props.addWorkout(name);
            setName("");
    }


    return (
  
    <div className="pusho-introduction">
        <Typography variant="h3" gutterBottom>
            Hallo {subject}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Kein Bock mehr auf Trainingspläne! Mehr Lust auf Nervenkitzel und Spaß bei deinem Training? Kein Problem! Lass doch einfach dein Glück des Zufalls entscheiden! Jetzt pusho ausprobieren!
        </Typography>
        <form onSubmit={handleSubmit}>
            <label>Welche Übung willst du heute ausführen?</label>
            <br></br>
            <input
                type="text"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
            Hinzufügen
            </button>
        </form>
    </div>
    );
  }
  
  