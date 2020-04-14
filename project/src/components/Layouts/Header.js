import React, { Component } from "react";
import '../../App.css';
import '../header.css'

import img1 from './mbds.jpeg'
class Header extends Component {
    render(){
        return(
             <div class="header">
              <img src= {img1} className="img"/>
              <div class="header-right">
                <a class="active" href="#home">Home</a>
              </div>
            </div>
        )
    }
}


export default Header;
