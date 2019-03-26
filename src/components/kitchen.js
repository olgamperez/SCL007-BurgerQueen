import React from 'react';

function Kitchen(props){
    const printOrderList= props.inputOrder.map(item=>{
        return(
            <p>{item.type} {item.price}</p>
        )
    })
    return(
        <div className="Screen2">
            <h1 className="kitchen">Cocina</h1>
            {props.inputName}
            <p>Pedidos</p>
            <ul>{printOrderList}</ul>
        </div>
    )
}
export default Kitchen; 
