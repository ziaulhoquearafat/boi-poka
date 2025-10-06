import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1200px] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
