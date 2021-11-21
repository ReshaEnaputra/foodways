import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import homeStyle from './styles/home.module.css'

import logo from './photos/deliv.png'
import pizza from './photos/pizza.png'

import pp1 from './photos/pp.jpeg'

import starbucks from'./photos/starbucks.png'
import burgerking from'./photos/burgerking.png'
import kfc from'./photos/kfc.png'
import jco from'./photos/jco.png'

import gb from './photos/geprekbensu.png'
import nasgor from './photos/nasgor.png'
import pecel from './photos/pecel.png'
import kopi from './photos/kopi.png'

const Home1 = () => {
    return (
        <div className={homeStyle.mainContainer}>
            <div className={homeStyle.topContainer}>
                <div className={homeStyle.logoContainer}>
                    <p className={homeStyle.logoP}>WaysFood</p>
                    <img className={homeStyle.logo} src={logo} alt="" />
                    <div style={{backgroundImage: `url(${pp1})`}} className={homeStyle.pp1}></div>
                </div>
                <div className={homeStyle.topcontentContainer}>
                    <p className={homeStyle.hungry}>Are You Hungry?</p>
                    <p className={homeStyle.deliv}>Express Home Delivery</p>
                    <img className={homeStyle.pizza} src={pizza} alt="" />
                    <hr className={homeStyle.line} />
                    <p className={homeStyle.lorem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className={homeStyle.contentContainer}>
                <p className={homeStyle.subHeader}>Popular Restaurant</p>
                <div className={homeStyle.cardContainer1}>
                    <img className={homeStyle.logos} src={burgerking} alt="" />
                    <p className={homeStyle.logoName}>Burger King</p>
                </div>
                <div className={homeStyle.cardContainer2}>
                    <img className={homeStyle.logos} src={starbucks} alt="" />
                    <p className={homeStyle.logoName}>Starbucks</p>
                </div>
                <div className={homeStyle.cardContainer3}>
                    <img className={homeStyle.logos} src={kfc} alt="" />
                    <p className={homeStyle.logoName}>KFC</p>
                </div>
                <div className={homeStyle.cardContainer4}>
                    <img className={homeStyle.logos} src={jco} alt="" />
                    <p className={homeStyle.logoName}>J.CO</p>
                </div>
                <p className={homeStyle.subHeader1}>Restaurant Near You</p>
                <NavLink className={homeStyle.cardContainer5} to={`/Main`}>
                    <img className={homeStyle.makanan} src={gb} alt="" />
                    <p className={homeStyle.nama}>Geprek Bensu</p>
                    <p className={homeStyle.jarak}>0,2 KM</p>
                </NavLink>
                <div className={homeStyle.cardContainer6}>
                    <img className={homeStyle.makanan} src={nasgor} alt="" />
                    <p className={homeStyle.nama}>Nasi Goreng Mas Rony</p>
                    <p className={homeStyle.jarak}>0,6 KM</p>
                </div>
                <div className={homeStyle.cardContainer7}>
                    <img className={homeStyle.makanan} src={pecel} alt="" />
                    <p className={homeStyle.nama}>Pecel Ayam Prambanan</p>
                    <p className={homeStyle.jarak}>0,6 KM</p>
                </div>
                <div className={homeStyle.cardContainer8}>
                    <img className={homeStyle.makanan} src={kopi} alt="" />
                    <p className={homeStyle.nama}>Kopi Kenangan</p>
                    <p className={homeStyle.jarak}>1,6 KM</p>
                </div>
            </div>
        </div>
    )
}

export default Home1
