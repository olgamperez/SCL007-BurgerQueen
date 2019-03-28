import React from 'react';
import Table from 'react-bootstrap/Table'

function Kitchen(props){
    const printOrderList= props.inputOrder.map((item,i)=>{
        return(
            <tr key={i}>
                <td>{item.type}</td>
                <td>{item.price}</td>
            </tr>
        )
    })
    return(
        <div className="Screen2">
            <h1 className="kitchen">Cocina</h1>
                {props.inputName}
            <p>Pedidos</p>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Productos</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {printOrderList}  
                </tbody>
            </Table>
            <button className="btn btn-secondary btn-lg" onClick={props.firebase}>Enviar Pedido</button>
        </div>
    )
}
export default Kitchen; 
