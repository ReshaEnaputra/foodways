import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import cssModule from './styles/cart.module.css'

import Navbar from './components/partnerNavbar'

import map from './photos/map.png'
import ayam from './photos/ayam.jpeg'
import keju from './photos/keju.jpeg'
import trash from './photos/trash.png'

const Cart = () => {
    return (
        <div>
            <Navbar />
            <div className={cssModule.mainContainer}>
                <h1 className={cssModule.header}>Geprek Bensu</h1>
                <p className={cssModule.delivHeader}>Delivery Location</p>
                <input className={cssModule.address} type="text" placeholder="Enter Address" />
                <button className={cssModule.mapBtn}>
                    <div className={cssModule.btnContent}>
                        Select On Map
                        <img className={cssModule.mapIcon} src={map} alt="" />
                    </div>
                </button>
                <div className={cssModule.contentContainer}>
                    <div className={cssModule.cardContainer}>
                        <p className={cssModule.subHeader}>Review Your Order</p>
                        <hr className={cssModule.line1} />
                        <img className={cssModule.food1} src={ayam} alt="" />
                        <p className={cssModule.name}>Paket Geprek</p>
                        <p className={cssModule.price}>Rp 15.000</p>
                        <img className={cssModule.trash1} src={trash} alt="" />
                        <hr className={cssModule.line2} />
                        <img className={cssModule.food2} src={keju} alt="" />
                        <p className={cssModule.name1}>Paket Geprek Keju</p>
                        <p className={cssModule.price1}>Rp 20.000</p>
                        <img className={cssModule.trash2} src={trash} alt="" />
                        <hr className={cssModule.line3} />
                    </div>
                    <div className={cssModule.priceContainer}>
                        <hr className={cssModule.line4} />
                        <p className={cssModule.total1}>Subtotal</p>
                        <p className={cssModule.total2}>Rp 35.000</p>
                        <p className={cssModule.total3}>Qty</p>
                        <p className={cssModule.total4}>2</p>
                        <p className={cssModule.total5}>Ongkir</p>
                        <p className={cssModule.total6}>Rp 10.000</p>
                        <hr className={cssModule.line5} />
                        <p className={cssModule.total7}>Total</p>
                        <p className={cssModule.total8}>Rp 45.000</p>
                    </div>
                </div>
                <button type="submit" className={cssModule.orderBtn}>Order</button>
            </div>
        </div>
    )
}

export default Cart
