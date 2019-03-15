import React from 'react';

function Food(props){
        return(
            <div className="food">
            <button id="btn-breakfast"type="button" className="btn-primary btn-lg Desayuno" onClick={props.onBreakfast}>
            Desayuno
            </button>
            <button id="btn-menu"type="button" className="btn-primary btn-lg Menu" onClick={props.onSetmenu}>
            Menu del Día
            </button>
            
            </div>
        )
}
export default Food;