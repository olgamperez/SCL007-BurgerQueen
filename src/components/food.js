import React from 'react';

function Food(props){
        return(
            <div className="food">
            <button type="button" className="btn-primary btn-lg Desayuno" onClick={props.onBreakfast}>
            Desayuno
            </button>
            <button type="button" className="btn-primary btn-lg Menu" onClick={props.onSetmenu}>
            Menu del Día
            </button>
            
            </div>
        )
}
export default Food;