import React from 'react';

function Registerclient(props){
        return(
            <div>
                <input type='text' onChange={props.onChangeTemp} value={props.onChangeDelete} placeholder="Ingrese cliente"/>
                <button id="btn-input" onClick={props.onClient} type="button" className="btn btn-outline-danger btn-name">
            Enviar
            </button>
            </div>
        )
    }
export default Registerclient;