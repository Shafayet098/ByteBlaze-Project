import React from 'react';
import Home from './Home';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <div className=''>
                <Nav></Nav>
            </div>
            <div className='w-full h-16'></div>
            <div className='min-h-[calc(100vh-120px)]'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;