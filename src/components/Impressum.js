import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
    },
  }));

export default function Impressum() {
    const classes = useStyles();
    
  
    return (
        <div className={classes.root}>
            <Grid container xs={12} alignItems="center" justify="space-around">
                <a href="https://github.com/stefanhassinger/pushup-tool/" target="_blank" rel="noreferrer">   
                    <GitHubIcon fontSize="large" color="disabled"/>
                </a>
            </Grid>    
        </div>        
    );
  }