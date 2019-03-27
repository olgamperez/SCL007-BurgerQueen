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
          <div className="col-md-4">
            <div className="card-mt-4">
              <button id="btnbreak" className="btn btn-secondary btn-lg" onClick={()=>{
                this.props.onClick(arr)}}> {arr.type} <br/>{arr.price} </button>
            </div>
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
