import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Calendar from './Calendar';
import App from './App';

export default class Edition extends React.Component  {
  render(){
    return(
      <div className="edition__container">
      <form action="">
      <h2>Fecha</h2>
      <input id="date" type="date" onChange={this.props.selectDate} />

      <h2>Estado</h2>
      <ul>
        <li><label for="o1"><input type="radio" value=":)" id="o1" name="options" onChange={this.props.whenCheckHappy}/> :) </label></li>
        <li><label for="o2"><input type="radio" value=":(" id="o2" name="options" onChange={this.props.whenCheckAngry} /> :( </label></li>
      </ul>

      <h2>Mensaje</h2>
      <input type="text" placeholder="¿Por qué es un buen día?" onChange={this.props.whenWrite}/>

      <Link className="link" to='/'>
          <input type="button" value="Guardar" onClick={this.props.whenSave} ></input>
         </Link>
          <Link className="link" to='/'>
          <input type="button" value="Cancelar"></input>
         </Link>
      </form>
      </div>
    );
  }
}
