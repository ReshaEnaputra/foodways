import React, { Component } from 'react'
import Popup from 'reactjs-popup';
import cssModule from '../../styles/register.module.css'
import "./style.css"

class ModalTest extends Component {
    constructor(props){
        super(props)

        this.state = {
            show : false
        }
    }

    show = () => {
        this.setState({
            show: true
        })
    }

    hide = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <Popup
                open={this.state.show} onClose={() => this.hide()}
                // trigger={<button className="button"> Open Modal </button>}
                modal
                nested
            >
            <div className={`${cssModule.formContainer} content`}>
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
            </Popup>
        )
    }
}


export default ModalTest