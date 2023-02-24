import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

function HomeScreen() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default HomeScreen;
