import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sheard/Navbar';

const Layout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;