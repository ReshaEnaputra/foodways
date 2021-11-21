import React from 'react'

import cssModule from './styles/profile1.module.css'

import Navbar from './components/userNavbar'

import logo from './photos/logo1.png'
import pp1 from './photos/pp1.jpeg'

const Profile1 = () => {
    return (
        <div>
            <Navbar />
            <div className={cssModule.contentContainer}>
                <div className={cssModule.profileContainer}>
                    <h1 className={cssModule.header1}>Partner's Profile</h1>
                    <div className={cssModule.infoContainer}>
                        <img className={cssModule.pp} src={pp1} alt="" />
                        <div className={cssModule.info}>
                            <p className={cssModule.title1}>Partner's Name</p>
                            <p className={cssModule.info1}>Geprek Bensu</p>
                            <p className={cssModule.title2}>Email</p>
                            <p className={cssModule.info2}>bensu@gmail.com</p>
                            <p className={cssModule.title3}>Phone</p>
                            <p className={cssModule.info3}>083896833122</p>
                        </div>
                    </div>
                    <button className={cssModule.editBtn}>Edit Profile</button>
                </div>
                <div className={cssModule.transContainer}>
                    <h1 className={cssModule.header1}>Hystory Transaction</h1>
                    <div className={cssModule.tdataContainer}>
                        <p className={cssModule.subHeader}>Andy</p>
                        <p className={cssModule.time}>Saturday, 12 March 2021</p>
                        <p className={cssModule.total}>Total: Rp 45.000</p>
                        <img className={cssModule.logo} src={logo} alt="" />
                        <div className={cssModule.statusContainer}>
                            <p className={cssModule.status}>Finished</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile1
