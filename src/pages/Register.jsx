import React from 'react'
import cssModule from './styles/register.module.css'

const Register = () => {
    return (
        <div className={cssModule.mainContainer}>
            <div className={cssModule.formContainer}>
                <h1 className={cssModule.header}>Register</h1>
                <form action="">
                    <input className={cssModule.emailInput} type="text" placeholder="Email" />
                    <input className={cssModule.passwordInput} type="password" placeholder="Password" />
                    <input className={cssModule.fullnameInput} type="text" placeholder="Fullname" />
                    <input className={cssModule.genderInput} type="text" placeholder="Gender" />
                    <input className={cssModule.phoneInput} type="text" placeholder="Phone" />
                    <input className={cssModule.asuserInput} type="text" placeholder="As User" />
                    <button type="submit" className={cssModule.btn}>Register</button>
                </form>
                <p className={cssModule.para}>Don't have an account? Click &nbsp;<a href="" className={cssModule.ap}>Here</a></p>
            </div>
        </div>
    )
}

export default Register
