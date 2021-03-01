import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Push-Ups", anzahl: 40,},
  { id: "todo-1", name: "Crunches", anzahl: 50},
];

ReactDOM.render(
    <App 
    subject = "Freund"
    workouts = {DATA} />, document.getElementById('root')
);
