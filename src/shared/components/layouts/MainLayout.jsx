import React from 'react';
import Navbar from '../Navbars/Navbar';
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default MainLayout;
