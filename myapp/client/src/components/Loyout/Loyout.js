import React, { Component } from 'react';
import './loyot.scss'
import Time from '../clock/clock'

class Loyout extends Component {
    state={
        money:{},
        sales:{},
        buuing:{},
        werhouse:{}
    }
  render() {
    return (
        < ul className = "backnav" >
            <li className="time">
              <Time/>
            </li>
            <li className="nav_item">
              <div><i class="fa fa-money" ></i>Гроші</div>
              <div className="submenu">
                <div className="sub_menu_item"> Sub1</div>
                <div className="sub_menu_item"> Sub1</div>
                <div  className="sub_menu_item"> Sub1</div>
              </div>
            </li>
            <li className="nav_item">
               Продажі
               
            </li>
            <li className="nav_item">
               
            </li>   
        </ul>
    );
  }
}

export default Loyout;
