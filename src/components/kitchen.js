import React from 'react';

function Kitchen(props){
    return(
        <div className="Screen2">
            <h1 className="kitchen">Cocina</h1>
            {props.inputName}
            <p>Pedidos</p>
            <div> </div>
        </div>
    )
}
export default Kitchen; 
