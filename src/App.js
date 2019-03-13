import React, { Component } from 'react';
import './App.css';
//import logo from './logo.svg';
import Header from './components/header.js';
import Food from './components/food.js';
import Nav from './components/nav.js';
import  Breakfast from './components/breakfast.js'
import Setmenu from './components/setmenu.js'

class App extends Component {
  constructor(){
    super();
    this.state= {
      initialBreak:false,
      initialSetmenu: false
    }
    this.changeStateFunction= this.changeStateFunction.bind(this);
    this.changeStateSetmenuFunction= this.changeStateSetmenuFunction.bind(this);
  }
changeStateFunction(){
  this.setState({
    ...this.state,
    initialBreak: true,
    initialSetmenu: false
  })
}
changeStateSetmenuFunction (){
  this.setState({
    ...this.state,
    initialSetmenu: true,
    initialBreak: false
  })
}

  render(){
    return (
      <div className="App">
        <Header />
        < Nav />
        <Food onBreakfast={this.changeStateFunction}
        onSetmenu={this.changeStateSetmenuFunction}/>
        <div className="Screen1">
          <h1>Garzon</h1>
          <input type="Text" className="cliente"  placeholder="Nombre de cliente"  aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          { this.state.initialBreak && <Breakfast/>}
          { this.state.initialSetmenu && <Setmenu/> }
        </div>
        <div className="Screen2">
          <h1>Cocina</h1>
          <p>Pedidos</p>
        </div>
      </div>
    );
  }
}

export default App;
