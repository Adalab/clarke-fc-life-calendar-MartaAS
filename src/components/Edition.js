import React from 'react';

export default class Edition extends React.Component  {
  render(){
    return(
      <div className="edition__container">
      <form action="">
      <h2>Fecha</h2>
      <input id="date" type="date" onChange={this.props.selectDate} />

      <h2>Estado</h2>
      <ul>
        <li><label for="o1"><input type="radio" value="Happy" id="o1" name="options" onChange={this.props.whenCheckHappy}/> :) </label></li>
        <li><label for="o2"><input type="radio" value="Angry" id="o2" name="options" onChange={this.props.whenCheckAngry} /> :( </label></li>
      </ul>

      <h2>Mensaje</h2>
      <input type="text" placeholder="¿Por qué es un buen día?" onChange={this.props.whenWrite}/>
      <input type="button" value="Guardar" />
      <input type="button" value="Cancelar" />
      </form>
      </div>
    );
  }
}
