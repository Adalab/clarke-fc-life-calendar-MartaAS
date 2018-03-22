import React, { Component } from 'react';
import Edition from './Edition';
import Calendar from './Calendar';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      ArrDays: [],
      ArrInfo: [],
      date: '',
      message: ''



    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <form action="">
        <h2>Fecha</h2>
        <input id="date" type="date"></input>

        <h2>Estado</h2>
        <input type="checkbox" name="smile" value="smile" /> :)
        <input type="checkbox" name="angry" value="angry" /> :(

        <h2>Mensaje</h2>
        <input type="text" placeholder="¿Por qué es un buen día?"></input>
        <input type="button" value="Guardar" />
        <input type="button" value="Cancelar" />
        </form>
      </div>
    );
  }
}
