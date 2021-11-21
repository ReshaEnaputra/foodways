import React from 'react'

import cssModule from './styles/profile1.module.css'

import Navbar from './components/partnerNavbar'

import logo from './photos/logo1.png'
import pp from './photos/pp.jpeg'

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className={cssModule.contentContainer}>
                <div className={cssModule.profileContainer}>
                    <h1 className={cssModule.header}>My Profile</h1>
                    <div className={cssModule.infoContainer}>
                        <img className={cssModule.pp} src={pp} alt="" />
                        <div className={cssModule.info}>
                            <p className={cssModule.title1}>Full Name</p>
                            <p className={cssModule.info1}>Andi</p>
                            <p className={cssModule.title2}>Email</p>
                            <p className={cssModule.info2}>andigans@gmail.com</p>
                            <p className={cssModule.title3}>Phone</p>
                            <p className={cssModule.info3}>083896833122</p>
                        </div>
                    </div>
                    <button className={cssModule.editBtn}>Edit Profile</button>
                </div>
                <div className={cssModule.transContainer}>
                    <h1 className={cssModule.header1}>Hystory Transaction</h1>
                    <div className={cssModule.tdataContainer}>
                        <p className={cssModule.subHeader}>Geprek Bensu</p>
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

export default Profile
