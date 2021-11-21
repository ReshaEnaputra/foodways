import React from 'react'

import Navbar from './components/partnerNavbar'

import cssModule from './styles/edit.module.css'

import map from './photos/map.png'

const Edit = () => {
    return (
        <div>
            <Navbar />
            <div className={cssModule.mainContainer}>
                <h1 className={cssModule.header}>Edit Profile</h1>
                <input className={cssModule.name} placeholder="Full Name" type="text" />
                <label className={cssModule.fileInput}>
                    <input className={cssModule.photoInput} type="file" />
                    Attach Image
                </label>
                <input className={cssModule.email} placeholder="Email" type="email" />
                <input className={cssModule.phone} placeholder="Phone" type="text" />
                <input className={cssModule.location} placeholder="Location" type="text" />
                <button className={cssModule.selectMap}>
                    Select On Map
                    <img className={cssModule.mapIcon} src={map} alt="" />
                </button>
                <button className={cssModule.submit}>Save</button>
            </div>
        </div>
    )
}

export default Edit
