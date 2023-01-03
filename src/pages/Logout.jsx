import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    localStorage.clear();
    navigate('/login');

    return (
        <></>
    )
}

export default Logout;