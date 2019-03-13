import React, { Component } from 'react';
import {data} from './data.json';


class Breakfast extends Component {
  constructor(){
    super();
    this.state= {
      data: data,
    }
}
  render() {
    const dataAcc = []
    for(let i in this.state.data){
      dataAcc.push(this.state.data[i])
    }
    const infoMenu = dataAcc[0].map((arr)=>{
      return(
          <div>
              <button> {arr.type} {arr.price} </button>
          </div>
      )
    })
    return (
      <div className="Screen1"> 
        <div className="button" >
          {infoMenu}
        </div>
      </div>
    );
  }
}

export default Breakfast;
