import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <>
            <Header header_title="Sign In" header_page="Login" />
            <LoginForm />
        </>
    )
}

export default Login;