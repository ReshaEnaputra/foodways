import React, { Component } from 'react'
import Popup from 'reactjs-popup';
import cssModule from '../../styles/login.module.css'
import "./style.css"
import {NavLink} from 'react-router-dom';

class ModalLogin extends Component {
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
            </Popup>
        )
    }
}


export default ModalLogin