import React, { useState } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import cssModule from './styles/navbar.module.css'

import logo from './images/deliv.png'

import pp from './images/ayam.jpeg'

const userNavbar = () => {
    
    return (
        <div className={cssModule.mainContainer}>
            <div className={cssModule.topContainer}>
                <div className={cssModule.logoContainer}>
                    <p className={cssModule.logoP}>WaysFood</p>
                    <img className={cssModule.logo} src={logo} alt="" />
                        <div style={{backgroundImage: `url(${pp})`}} className={cssModule.pp}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default userNavbar
