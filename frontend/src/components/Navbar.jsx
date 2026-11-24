import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaUserCircle } from 'react-icons/fa'
import { Context } from '../context/Context';
import { toast } from 'react-toastify';
import axiosInstance from '../utls/axiosInstance.js';
import Loader from './Loader.jsx';

const Navbar = () => {

    const { authState, setAuthState, adminProfile, navigate } = useContext(Context);
    const profile = adminProfile || {};

    const [visible, setVisible] = useState(false);
    const [loader, setLoader] = useState(false);

    const location = useLocation();

    if (location.pathname === '/login' || location.pathname === '/forget-password' || location.pathname === '/verify-email' || location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service') {
        return null;
    }

    // const handleDownload = () => {
    //     const link = document.createElement("a");
    //     link.href = "/resume.pdf"; // File in public folder
    //     link.download = "Jabbir_Khan_Resume.pdf"; // Suggested download name
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post(`/api/v1/user/logout`, {});
            if (response.data.success) {
                toast.success(response.data.message);
                setAuthState('unauthenticated');
                Navigate('/login');
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    const sendOtpForEmailVerification = async () => {
        try {
            if (authState !== 'authenticated') {
                return navigate('/login');
            }

            setLoader(true);
            const response = await axiosInstance.get('/api/v1/user/send-verify-email-otp');
            if (response.data.success) {
                navigate('/verify-email');
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    }

    if (loader) {
        return <Loader />
    }

    return (
        <>
            <nav className='flex items-center justify-between bg-gray-900 p-4 h-15 mx-auto border-b border-white'>
                <div className='flex items-center text-white'>
                    <Link to='/' className="text-2xl">Portfolio</Link>
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <ul className='hidden sm:flex items-center gap-10 text-white'>
                        <Link to="/" className="hover:text-gray-200">Home</Link>
                        <Link to="/projects" className="hover:text-gray-200">Projects</Link>
                        <Link to="/about" className="hover:text-gray-200">About</Link>
                        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                        <div className='flex gap-2'>
                            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 cursor-pointer">
                                Resume
                            </a>
                            {/* <button onClick={handleDownload} className='bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600'>Resume</button> */}
                            <div className='group relative w-full'>
                                <FaUserCircle className='text-4xl hidden sm:flex hover:text-blue-400 transition-all duration-200 cursor-pointer' />
                                <div className='w-[150px] absolute z-10 hidden group-hover:block top-9 right-0 bg-gray-600 shadow-md p-1 text-sm'>
                                    <div className='w-full flex flex-col gap-2'>
                                        {profile.isAccountVerified ? (
                                            <p className="hover:text-blue-400 px-4 transition-all duration-200 cursor-ointer">
                                                Verified
                                            </p>
                                        ) : (
                                            <p
                                                onClick={sendOtpForEmailVerification}
                                                className="hover:text-blue-400 px-4 transition-all duration-200 cursor-pointer"
                                            >
                                                Verify email
                                            </p>
                                        )}
                                        <Link onClick={handleLogout} className='hover:text-blue-400 px-4 transition-all duration-200 cursor-pointer'>{authState === 'authenticated' ? 'Logout' : 'Login'}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <Link to="/" onClick={() => setVisible(false)} className="hover:text-gray-200">Home</Link>
                    <Link to="/projects" onClick={() => setVisible(false)} className="hover:text-gray-200">Projects</Link>
                    <Link to="/about" onClick={() => setVisible(false)} className="hover:text-gray-200">About</Link>
                    <Link to="/contact" onClick={() => setVisible(false)} className="hover:text-gray-200">Contact</Link>

                    <button onClick={handleLogout} className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600">{authState === 'authenticated' ? "Logout" : "Login"}</button>
                    {/* <button onClick={handleDownload} className='bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600'>Resume</button> */}
                    <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 cursor-pointer">
                        Resume
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
