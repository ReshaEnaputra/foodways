import React from 'react'
import cssModule from './styles/navbar.module.css'

import logo from './images/deliv.png'

import pp1 from './images/userpp.jpeg'

const partnerNavbar = () => {
    return (
        <div className={cssModule.mainContainer}>
            <div className={cssModule.topContainer}>
                <div className={cssModule.logoContainer}>
                    <p className={cssModule.logoP}>WaysFood</p>
                    <img className={cssModule.logo} src={logo} alt="" />
                    <div style={{backgroundImage: `url(${pp1})`}} className={cssModule.pp1}></div>
                </div>
            </div>
        </div>
    )
}

export default partnerNavbar
