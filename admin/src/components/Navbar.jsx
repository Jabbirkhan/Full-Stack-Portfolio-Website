import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance.js';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { navigate, authState, setAuthState } = useContext(Context);

    const location = useLocation();

    if(location.pathname === "/login" || location.pathname === '/forget-password'){
        return null;
    }

    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post(`/api/v1/admin/logout`, {});
            if(response.data.success){
                toast.success(response.data.message || "Admin logout successfully");
                setAuthState('unauthenticated');
                navigate("/login");
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    return (
        <>
            <nav className='flex items-center justify-between bg-gray-900 p-4 h-15 mx-auto border-b border-white'>
                <div className='flex items-center text-white'>
                    <Link to='/' className="text-2xl font-bold">Admin Panel</Link>
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <ul className='hidden sm:flex items-center gap-10 text-white'>
                        <Link to="/" className="hover:text-gray-200">Add Project</Link>
                        <Link to="/projectList" className="hover:text-gray-200">All Projects</Link>
                        <Link to="/addAbout" className="hover:text-gray-200">Add About</Link>
                        <p onClick={handleLogout} className="hover:text-gray-200 cursor-pointer">{authState === 'authenticated' ? "Logout" : "Login"}</p>
                    </ul>
                    <ul className='flex items-center justify-center gap-5'>
                        <FontAwesomeIcon icon={faBars} onClick={() => setVisible(true)} className='text-white sm:hidden' />
                    </ul>
                </div>
            </nav>

            <nav className={`absolute top-0 right-0 bottom-0 bg-gray-600 overflow-hidden transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex gap-3 p-4'>
                    <span onClick={() => setVisible(false)} className='rotate-180'><FontAwesomeIcon icon={faArrowRight} className='text-white' /></span>
                    <p className='text-xl font-medium text-white'>Back</p>
                </div>
                <div className='flex flex-col gap-5 text-xl text-white p-4'>
                    <Link to="/" onClick={() => setVisible(false)} className="hover:text-gray-200">Add Project</Link>
                    <Link to="/projectList" onClick={() => setVisible(false)} className="hover:text-gray-200">Projects</Link>
                    <Link to="/addAbout" onClick={() => setVisible(false)} className="hover:text-gray-200">Add About</Link>
                    <Link to="/logout" onClick={handleLogout} className="hover:text-gray-200">{authState === 'authenticated' ? "Logout" : "Login"}</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
