import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Food from './components/food.js';
import Nav from './components/nav.js';
import  Breakfast from './components/breakfast.js'
import Setmenu from './components/setmenu.js'
import Registerclient from './components/client.js'
import Kitchen from './components/kitchen';




class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      initialBreak:false,
      initialSetmenu: false,
      name: "",
      temp: "",
      idorder:[],

    }
    this.changeStateFunction= this.changeStateFunction.bind(this);
    this.changeStateSetmenuFunction= this.changeStateSetmenuFunction.bind(this);
    this.updateTemp= this.updateTemp.bind(this);
    this.updateName= this.updateName.bind(this);
    this.orderBreakfast= this.orderBreakfast.bind(this);
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
orderBreakfast(e){
  let orderAcc= this.state.idorder;
  orderAcc.push(e);
  this.setState({
    ...this.state,
    idorder: orderAcc
  })
}
  render(){
    return (
      <div className="App">
        <Header />
        < Nav />
        <div className="container">
          <div className="Screen1">
            <h1 className="waiter">Garzon</h1>
            <Registerclient onChangeTemp={this.updateTemp} onChangeDelete={this.state.temp} onClient={this.updateName}/>
            <Food onBreakfast={this.changeStateFunction} onSetmenu={this.changeStateSetmenuFunction}/>
            { this.state.initialBreak && <Breakfast onClick={this.orderBreakfast}/>}
            { this.state.initialSetmenu && <Setmenu onClick={this.orderBreakfast}/> }
          </div>
          <Kitchen inputName={this.saveTemp()} inputOrder={this.state.idorder}/>
        </div>
      </div>
    );
  }
}
export default App;
