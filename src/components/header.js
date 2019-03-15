import React, {Component} from 'react';
import logo from './burguer.jpeg';

class Header extends Component{
    render(){
        return(
            <div className="App-header">
            <img src={logo} className="image" alt="logo" />
            </div>
        )
    }
}
export default Header;