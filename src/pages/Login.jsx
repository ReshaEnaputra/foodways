import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import cssModule from './styles/login.module.css'

const Login = () => {
    return (
        <div className={cssModule.mainContainer}>
            <div className={cssModule.formContainer}>
                <h1 className={cssModule.header}>Login</h1>
                <form action="">
                    <input className={cssModule.input} type="text" placeholder="Email" />
                    <input className={cssModule.input1} type="password" placeholder="Password" />
                    <NavLink type="submit" className={cssModule.btn} to={`/1`}>Login</NavLink>
                </form>
                <p className={cssModule.para}>Don't have an account? Click &nbsp;<a href="" className={cssModule.ap}>Here</a></p>
            </div>
        </div>
    )
}

export default Login
