import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Push-Ups", anzahl: 200,},
  { id: "todo-1", name: "Crunches", anzahl: 50},
];

ReactDOM.render(
    <App 
    subject = "Fremder"
    workouts = {DATA} />, document.getElementById('root')
);
