import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Calendar from './Calendar';
import App from './App';

export default class Edition extends React.Component  {
  render(){
    const info = this.props.infoCalendar;
    return(
      <div className="container_edition">
      <form action="">
      <h2>Fecha</h2>
      <input id="date" type="date" onChange={this.props.selectDate} />

      <h2>Estado</h2>
      <ul className="check_face">
        <li><label for="o1"><input type="radio" value=":)" id="o1" name="options" onChange={this.props.whenCheckHappy}/> :) </label></li>
        <li><label for="o2"><input type="radio" value=":(" id="o2" name="options" onChange={this.props.whenCheckAngry} /> :( </label></li>
      </ul>

      <div className="edition__message">
      <h2>Mensaje</h2>
      <input type="text" placeholder="¿Por qué es un buen día?" onChange={this.props.whenWrite}/>
      </div>

      <Link className="link" to='/'>
          <input type="button" value="Guardar" onClick={this.props.whenSave} ></input>
         </Link>
          <Link className="link" to='/'>
          <input type="button" value="Cancelar"></input>
         </Link>
      </form>

      <ul className="container_calendar_inEdition">
    {
      info.map(
        d =><li><p title={d.date}><img className={`face face--${d.face}`} /></p>
      <span >{d.message} </span>
        </li>
        )
      }
    </ul>
      </div>


    );
  }
}
