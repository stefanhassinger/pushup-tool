import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Mention } from "react-twitter-widgets";


function WorkoutAbgeschlossen() {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        typography: {
            padding: theme.spacing(2),
        },
      }));

      const classes = useStyles();

    return (
        

        <div>
            <Grid container spacing={1} className={classes.typography}>
                <Grid item xs={12}>
                    <Typography variant="h6">
                        Geschafft!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                        Herzlichen Glückwunsch!
                    </Typography>
                </Grid>
            </Grid>

            <Card>
                <CardMedia>
                    <iframe src="https://giphy.com/embed/1QjxR7Y8yFZKjupWey" title="jimmy-fallon" width="480" height="420" frameBorder="0" allowFullScreen></iframe>
                </CardMedia>
                <CardContent>
                    <Typography variant="body2" component="p">
                        Du willst deinen Erfolg mit mir teilen?
                    </Typography>
                    <br></br>
                    <Mention username="stefbretz" options={{ text: "ist der coolste!" }} />
                </CardContent>
                
            </Card>                
        </div>      
    )
}

export default WorkoutAbgeschlossen;