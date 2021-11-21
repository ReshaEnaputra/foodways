import React from 'react'

import cssModule from './styles/add.module.css'

import Navbar from './components/userNavbar'

const Add = () => {
    return (
        <div>
            <Navbar />
            <div className={cssModule.mainContainer}>
                <p className={cssModule.p}>Add Product</p>
                <input className={cssModule.title} type="text" placeholder="Title" />
                <label className={cssModule.label} For="">
                    <input className={cssModule.fileInput} type="file" />
                    Attach Image
                </label>
                <input className={cssModule.price} type="text" placeholder="Price" />
                <button className={cssModule.submitBtn}>Save</button>
            </div>
        </div>
    )
}

export default Add
