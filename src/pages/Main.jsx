import React from 'react'
import Navbar from './components/partnerNavbar'

import ayam from './photos/ayam.jpeg'
import bawang from './photos/bawang.jpeg'
import keju from './photos/keju.jpeg'
import mie from './photos/mie.jpeg'
import mk from './photos/mk.jpeg'
import mm from './photos/mm.jpeg'
import mozza from './photos/mozza.jpeg'

import cssModule from './styles/main.module.css'

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className={cssModule.mainContainer}>
                <p className={cssModule.header}>Geprek Bensu, Menus</p>
                <div className={cssModule.cardContainer1}>
                    <img className={cssModule.img} src={ayam} alt="" />
                    <p className={cssModule.title}>Paket Geprek</p>
                    <p className={cssModule.harga}>Rp 15.000</p>
                    <button className={cssModule.orderBtn}>Order</button>
                </div>
                <div className={cssModule.cardContainer2}>
                    <img className={cssModule.img} src={keju} alt="" />
                    <p className={cssModule.title}>Paket Geprek Keju</p>
                    <p className={cssModule.harga}>Rp 20.000</p>
                    <button className={cssModule.orderBtn}>Order</button>
                </div>
                <div className={cssModule.cardContainer3}>
                    <img className={cssModule.img} src={mozza} alt="" />
                    <p className={cssModule.title}>Paket Geprek Leleh</p>
                    <p className={cssModule.harga}>Rp 25.000</p>
                    <button className={cssModule.orderBtn}>Order</button>
                </div>
                <div className={cssModule.cardContainer4}>
                    <img className={cssModule.img} src={bawang} alt="" />
                    <p className={cssModule.title}>Paket Sambel Matah</p>
                    <p className={cssModule.harga}>Rp 15.000</p>
                    <button className={cssModule.orderBtn}>Order</button>
                </div>
                <div className={cssModule.cardContainer5}>
                    <img className={cssModule.img} src={mie} alt="" />
                    <p className={cssModule.title}>Mie Ayam Geprek</p>
                    <p className={cssModule.harga}>Rp 17.000</p>
                    <button className={cssModule.orderBtn}>Order</button>
                </div>
                <div className={cssModule.cardContainer6}>
                    <img className={cssModule.img} src={mk} alt="" />
                    <p className={cssModule.title}>Mie Ayam Geprek Keju</p>
                    <p className={cssModule.harga}>Rp 22.000</p>
                    <button className={cssModule.orderBtn}>Order</button>
                </div>
                <div className={cssModule.cardContainer7}>
                    <img className={cssModule.img} src={mm} alt="" />
                    <p className={cssModule.title}>Mie Ayam Leleh</p>
                    <p className={cssModule.harga}>Rp 27.000</p>
                    <button className={cssModule.orderBtn}>Order</button>
                </div>
                <div className={cssModule.cardContainer8}>
                    <img className={cssModule.img} src={bawang} alt="" />
                    <p className={cssModule.title}>Mie Ayam Sambel Telur Asin</p>
                    <p className={cssModule.harga}>Rp 22.000</p>
                    <button className={cssModule.orderBtn}>Order</button>
                </div>
            </div>
        </div>
    )
}

export default Main
