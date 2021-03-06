import React, { Component } from 'react';
import {data} from './data.json';

class Setmenu extends Component {
    constructor(){
        super();
        this.state= {
            data: data
        }
    }
    render() {
    const dataAcc = []
    for(let i in this.state.data){
        dataAcc.push(this.state.data[i])
    }
    const infoMenu = dataAcc[1].map((arr)=>{
        return(
            <div className="col-md-4" key={arr.type}>
                <div className="card-mt-4">
                    <button id="btnmenuday" className="btn btn-secondary btn-lg" onClick={()=>{
                        this.props.onClick(arr)}}> {arr.type} <br/> {arr.price} </button>
                </div>
            </div>
        )
    })
    return (
        <div className="Screen2"> 
            <div className="button" >
                {infoMenu}
            </div>
        </div>
    );
    } 
}

export default Setmenu;
