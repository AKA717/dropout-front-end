import React from "react";
import {connect} from 'react-redux';
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import LoginComponent from "../login/login";
import RegisterComponent from "../register/register";
import AdminLoginComponent from "../admin/login/login";
import AdminNavbar from '../admin/navbar/navbar';
import AdminViewComponent from "../admin/view/admin-view";
import './home.css';
import UserViewComponent from "../user/view/user-view";

const Home = () => {

    const location = useLocation();

    console.log(location);

    return(
        <>
        {location.pathname.includes('/admin') ? <AdminNavbar/> : <Navbar/>}
        <Routes>
            <Route exact path="/" element={<LoginComponent/>}/>
            <Route exact path="/view" element={<UserViewComponent/>}/>
            <Route exact path="/signup" element={<RegisterComponent/>}/>
            <Route exact path="/admin" element={<AdminLoginComponent/>}/>
            <Route exact path="/admin/view" element={<AdminViewComponent/>}/>
        </Routes>
        </>
    );
}


export default connect(null,null)(Home);