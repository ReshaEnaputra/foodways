import React from 'react'
import cssModule from './styles/navbar.module.css'

import logo from './images/deliv.png'

const navbar = () => {
    return (
        <div className={cssModule.mainContainer}>
            <div className={cssModule.topContainer}>
                <div className={cssModule.logoContainer}>
                    <p className={cssModule.logoP}>WaysFood</p>
                    <img className={cssModule.logo} src={logo} alt="" />
                    <button className={cssModule.regBtn}>Register</button>
                    <button className={cssModule.logBtn}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default navbar
