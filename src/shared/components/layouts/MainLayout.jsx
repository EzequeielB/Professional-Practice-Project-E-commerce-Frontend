<<<<<<< HEAD
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
=======
import React from "react";
import Navbar from "../Navbars/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
>>>>>>> 636009ac9b488bac976e0f9e61f9b2fc30da6bf7
};

export default MainLayout;
