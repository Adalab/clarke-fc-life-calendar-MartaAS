import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Edition from './Edition';
import Calendar from './Calendar';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.handleCalendar = this.handleCalendar.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleEmotionHappy = this.handleEmotionHappy.bind(this);
    this.handleEmotionAngry = this.handleEmotionAngry.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state ={
      ArrDays: [],
      ArrInfo: [],
      date: '',
      message: '',
      face: true

    };
  }


  handleCalendar(event){
    const dateCalendar = event.target.value; //recogemos el valor seleccionado del calendario
    this.setState({
      date: dateCalendar
    });
//     console.log(this.state.date);
  }


  handleMessage(event){
    const textMessage = event.target.value; //recogemos el texto introducido en el input texto
    this.setState({
      message : textMessage
    });

    //localStorage.setItem("lego", JSON.stringify(obj));
    // console.log(obj);
    //let valorrecuperado = localStorage.getItem("lego");
    //let id = valorrecuperado.id;
    //console.log(valorrecuperado, JSON.parse(valorrecuperado));
  }

  handleEmotionHappy(event){
    // const emotionHappy = event.target.value;
    // this.setState({
    // smileFace : !emotionHappy
    //const emotionHappy = document.querySelector('input[name="options"]:checked').value;
    //console.log('>  ' + selected);
    this.setState({
        face: true
  });
  //console.log(this.state.face);
  }

  handleEmotionAngry(event){
    const emotionangry = event.target.value;
    this.setState({
    face: false
  });
   //console.log(this.state.face);
  }

  handleSave(){
     const dateSelected = this.state.date;
     const messageSelected = this.state.message;
     const faceSelected = this.state.face;
     //console.log(dateSelected +'/'+messageSelected+'/'+faceSelected );
     const obj = {'date': dateSelected, 'message': messageSelected, 'face': faceSelected}
     //console.log(obj);
     let infoDays = JSON.parse(localStorage.getItem("daysMarta1"));

     if(infoDays == null)  infoDays = [];

     localStorage.setItem("obj",JSON.stringify(obj));

     infoDays.push(obj);
     //infoDays.concat(obj);
     localStorage.setItem("daysMarta1",JSON.stringify(infoDays));
     //console.log(localStorage.getItem("daysMarta"));
     /* Prueba para saber lo guardado en storage */
     //let pruebadias = localStorage.getItem("days");

  }

  render() {

       let infoDays = JSON.parse(localStorage.getItem("daysMarta1"));
       if(infoDays == null)  infoDays = [];

    return (
      <div className="App">
      <header>
        <nav>
        <ul>

          <li><Link to='/addFace'>+</Link></li>
        </ul>
        </nav>
      </header>
      <Switch>
				<Route exact path='/addFace' render={() =>
          <Edition
          selectDate={this.handleCalendar}
          whenWrite={this.handleMessage}
          whenCheckHappy={this.handleEmotionHappy}
          whenCheckAngry={this.handleEmotionAngry}
          whenSave={this.handleSave}
          /> }
        />
        <Route path='/' render={() =>
          <Calendar
          infoCalendar={infoDays}
          />}
        />

        <Route exact path='/' component={ Calendar } />
        <Route path='/addFace' component={ App }
        />
      </Switch>
      </div>
    );
  }
}
