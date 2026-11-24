import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "./../utls/axiosInstance.js";

export const Context = createContext();

const ContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [authState, setAuthState] = useState('checking');
    const [projects, setProjects] = useState([]);
    const [adminProfile, setAdminProfile] = useState({});
    const [userProfile, setUserProfile] = useState({});

    const verifyUser = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/verify`);
            if (response.data.success) {
                setAuthState('authenticated');
            } 
        } catch (error) {
            setAuthState('unauthenticated'); // fallback
            if(error.response?.status !== 401){
                toast.error(error.response?.data?.message);
            }
        }
    }

    useEffect(()=>{
        verifyUser();
    },[]);
    
    const getAllProjects = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/allprojects`);
            if (response.data.success) {
                setProjects(response.data.newProjects);
            } 
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    const fetchUserProfile = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/profile`);
            if (response.data.success) {
                setUserProfile(response.data.user);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }
    
    const getAdminProfile = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/admin-profile`);
            if (response.data.success) {
                setAdminProfile(response.data.profile);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(() => {
        if (authState === 'authenticated') {
            getAllProjects();
            getAdminProfile();
            fetchUserProfile();
        }
    }, [authState]);

    const value = useMemo(() => ({
        authState, setAuthState,
        navigate, backendUrl,
        projects, setProjects,
        userProfile, fetchUserProfile,
        adminProfile,
    }), [authState, userProfile, projects, adminProfile]);

    return (
        <>
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
        </>
    )
}

export default ContextProvider;