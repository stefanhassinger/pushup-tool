import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),

  },
}));

export default function Workout(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const classes = useStyles();

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
    <div className={"classes.root"}>
      <Box mb={1}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid container>
              <Grid container item xs={4} alignItems="center">
                {props.name}
              </Grid>
              <Grid container item xs={4} alignItems="center">
                {props.anzahl}
              </Grid>
              <Grid container item xs={4} alignItems="center">
              <CheckCircleIcon 
                  color="primary"
                  type="button"
                  className="btn btn__delete"
                  onClick={() => props.deleteWorkout(props.id)}
                >
                  fertig!
              </CheckCircleIcon>
              {/* <EditIcon
                  color="primary"
                  type="button"
                  className="btn btn_delete"
                  onClick={() => setEditing(true)}
                >
                  Edit!
              </EditIcon> */}
            </Grid>          
          </Grid>
        </Paper>
      </Box>
    </div>
  );
  
  return <div className="todo">{isEditing ? editingTemplate : viewTemplate}</div>;
}