import { createContext, useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance.js";

export const Context = createContext();

const ContextProvider = (props) => {

    const [authState, setAuthState] = useState('checking');
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    const userVerify = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/admin/verify`);
            if (response.data.success) {
                setAuthState('authenticated');
            }
        } catch (error) {
            setAuthState('unauthenticated');
            if(error.response?.status !== 401){
                toast.error(error.response?.data?.message);
            }
        }
    }

    const getAllProjects = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/admin/allprojects`);
            if (response.data.success) {
                setProjects(response.data.newProjects);
            } 
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(() => {
        userVerify();
        getAllProjects();
    },[])

    const value = useMemo(() => ({
        authState, setAuthState, navigate, projects, setProjects
    }),[authState, projects]);

    return (
        <>
            <Context.Provider value={value}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default ContextProvider;