import React from 'react';

function Registerclient(props){
        return(
            <div>
                <p>Cliente:</p>
                <input type='text' onChange={props.onChangeTemp} value={props.onChangeDelete}/>
                <button onClick={props.onClient} type="button" className="btn btn-outline-primary">
            Clickeame
            </button>
            </div>
        )
    }
export default Registerclient;