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
      face: ''

    };
  }

  handleCalendar(event){
    const dateCalendar = event.target.value; //recogemos el valor seleccionado del calendario
    this.setState({
      date: dateCalendar
    });
  }


  handleMessage(event){
    const textMessage = event.target.value; //recogemos el texto introducido en el input texto
    this.setState({
      message : textMessage
    });
  }

  handleEmotionHappy(event){
      this.setState({
        face: 'happy'
    });
    let hiddenMessage = document.querySelector('.edition__message');
    hiddenMessage.hidden = false;

  }

  handleEmotionAngry(event){
    let hiddenMessage = document.querySelector('.edition__message');
    hiddenMessage.hidden = true;

    this.setState({
    face: 'unhappy'
    });
  }

  handleSave(){
     const dateSelected = this.state.date;
      let messageSelected = this.state.message;
     const faceSelected = this.state.face;
     if(faceSelected == "unhappy"){
       messageSelected = '';
     }
     const obj = {
     'date': dateSelected,
     'message': messageSelected,
    'face': faceSelected}
     let infoDays = JSON.parse(localStorage.getItem("myCalendar"));

     if(infoDays == null)  infoDays = [];

     localStorage.setItem("obj",JSON.stringify(obj));

     infoDays.push(obj);
     localStorage.setItem("myCalendar",JSON.stringify(infoDays));
  }

  render() {

       let infoDays = JSON.parse(localStorage.getItem("myCalendar"));
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
          infoCalendar={infoDays}
          />
        }
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
