import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Page/Shared/Navbar';

const Main = () => {
    return (
        <div className=''>
           <Navbar></Navbar>
           <div className=''>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Main;