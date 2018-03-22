import React, { Component } from 'react';
import Edition from './Edition';
import Calendar from './Calendar';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.handleCalendar = this.handleCalendar.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleEmotionHappy = this.handleEmotionHappy.bind(this);
    this.handleEmotionAngry = this.handleEmotionAngry.bind(this);
    this.state ={
      ArrDays: [],
      ArrInfo: [],
      date: '',
      message: '',
      smileFace: true,
      angryFace: false,

    };
  }

  handleCalendar(event){
    const dateCalendar = event.target.value;
    const textMessage = event.target.value; //recogemos el valor seleccionado del calendario
    this.setState({
      date : dateCalendar,
      message : textMessage
    })
    // console.log(dateCalendar);
  }

  handleMessage(event){
    const textMessage = event.target.value; //recogemos el texto introducido en el input texto
    this.setState({
      message : textMessage
    })
  //  console.log(textMessage);
  }

  handleEmotionHappy(event){
    // const emotionHappy = event.target.value;
    // this.setState({
    // smileFace : !emotionHappy
    const emotionHappy = document.querySelector('input[name="options"]:checked').value;
    //console.log('>  ' + selected);
    this.setState({
        smileFace : !emotionHappy
  });
  console.log(emotionHappy);
  }

  handleEmotionAngry(event){
    const emotionangry = event.target.value;
    this.setState({
    angryFace : !emotionangry
  });
   console.log(emotionangry);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <Edition
        selectDate={this.handleCalendar}
        whenWrite={this.handleMessage}
        whenCheckHappy={this.handleEmotionHappy}
        whenCheckAngry={this.handleEmotionAngry} />
        <Calendar />
    </div>
    );
  }
}
