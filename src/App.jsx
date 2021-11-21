import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Home1 from "./pages/Home1"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./pages/components/navbar"
import UserNavbar from "./pages/components/userNavbar"
import PartnerNavbar from "./pages/components/partnerNavbar"
import Main from "./pages/Main"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Profile1 from "./pages/Profile1"
import Edit from "./pages/Edit"
import Edit1 from "./pages/Edit1"
import Table from "./pages/Table"
import Add from "./pages/Add"
import Menu from "./pages/components/menu/NavbarMenu"

import './App.css'

const App = () => {
  return  (
    <div>
      <Router basename="/">
        {/* <Menu /> */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/1" element={<Home1/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Navbar" element={<Navbar/>}/>
          <Route path="/UserNavbar" element={<UserNavbar/>}/>
          <Route path="/PartnerNavbar" element={<PartnerNavbar/>}/>
          <Route path="/Main" element={<Main/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Profile1" element={<Profile1/>}/>
          <Route path="/Edit" element={<Edit/>}/>
          <Route path="/Edit1" element={<Edit1/>}/>
          <Route path="/Table" element={<Table/>}/>
          <Route path="/Add" element={<Add/>}/>
        </Routes>
      </Router>
    </div>
  )
};

export default App;