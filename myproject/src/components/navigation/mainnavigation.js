import React from 'react';
import {NavLink} from 'react-router-dom';
import './mainnavigation.css'

const Mainnavigation=props=>(
    <header className="main-navigation">
        <div className="main-navigation_logo">
            <h1>EasyEvent</h1>
        </div>
        <nav className="main-navigation_item">
            <ul>
                <li>
                    <NavLink to="/auth" > login </NavLink>
                </li>

              
            </ul>
        </nav>
    </header>
)
export default Mainnavigation;