import React from "react";

export default function ShuffleButton(props) {

    // const [anzahl, setAnzahl] = useState(0);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //         props.shuffleWorkout(anzahl);
            
    // }

    function handleSubmit(e) {
        e.preventDefault();
        props.shuffleWorkouts();
    }


    
    //Hier Randomumber generieren!//

    return(
    <div className="pusho-shuffle-button">
        <p>Du bist dem aktuellen Workout unzufrieden? Dann shuffle dein Workout!!</p>
        <button  
            onClick={handleSubmit}
            type="submit" 
            className="btn btn-shuffle"
        >
            Workout starten
        </button>
    </div>
    );
}