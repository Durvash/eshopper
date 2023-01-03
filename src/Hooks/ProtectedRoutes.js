import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";

const ProtectedRoutes = (props) => {
    const { Component } = props;
    const navigate = useNavigate();

    let login_token = localStorage.getItem('login_token');
    
    return (
        <>
            {
                (!login_token) ? <Login /> : <Component />
            }
        </>
    )
}

export default ProtectedRoutes;