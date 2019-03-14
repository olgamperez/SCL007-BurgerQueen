import React, { Component } from 'react';
import './App.css';
//import logo from './logo.svg';
import Header from './components/header.js';
import Food from './components/food.js';
import Nav from './components/nav.js';
import  Breakfast from './components/breakfast.js'
import Setmenu from './components/setmenu.js'
import Registerclient from './components/client.js'

class App extends Component {
  constructor(){
    super();
    this.state= {
      initialBreak:false,
      initialSetmenu: false,
      name: "",
      temp: ""
    }
    this.changeStateFunction= this.changeStateFunction.bind(this);
    this.changeStateSetmenuFunction= this.changeStateSetmenuFunction.bind(this);
    this.updateTemp= this.updateTemp.bind(this);
    this.updateName= this.updateName.bind(this);
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
updateTemp(e){
  this.setState({
    ...this.state,
    temp: e.target.value,
  })
}

updateName(){
  this.setState({
    ...this.state,
    temp:"",
    name: this.state.temp,
    
  });
}
saveTemp(){
  if(this.state.name){
    return(
      <p>Cliente: {this.state.name}</p>
    )
  }
  else{
    return null
  }
}
  render(){
    return (
      <div className="App">
        <Header />
        < Nav />
        <div className="Screen1">
        <Registerclient onChangeTemp={this.updateTemp} onChangeDelete={this.state.temp} onClient={this.updateName}/>
        <h1>Garzon</h1>
        <Food onBreakfast={this.changeStateFunction}
        onSetmenu={this.changeStateSetmenuFunction}/>
          { this.state.initialBreak && <Breakfast/>}
          { this.state.initialSetmenu && <Setmenu/> }
        </div>
        <div className="Screen2">
          <h1>Cocina</h1>
          {this.saveTemp()}
          <p>Pedidos</p>
        </div>
      </div>
    );
  }
}
export default App;
