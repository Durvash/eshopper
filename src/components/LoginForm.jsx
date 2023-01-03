import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { errorMessage, hidePageLoader, showPageLoader, successMessage } from "../helper/General";

const LoginForm = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const loginSubmitHandler = (e) => {
        e.preventDefault();
        checkLogin();
    }

    const checkLogin = async () => {

        showPageLoader();

        await axios({
            method  : 'post',
            url     : 'https://dummyjson.com/auth/login',
            data    : {
                'username' : username,
                'password' : password
            },
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then((res) => {
            // console.log(res);
            localStorage.setItem('login_token', res.data.token);
            hidePageLoader();
            // successMessage('Login Successfully.');
            navigate('/');
        }).catch((err) => {
            errorMessage(err.response.data.message);
            hidePageLoader();
        });
    }
    
    return (
        <div className="container-fluid pt-5" style={{marginLeft: "20%"}}>
            <div className="row px-xl-5">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form onSubmit={loginSubmitHandler}>
                            <div className="control-group">
                                <label>Username</label>
                                <input type="text" placeholder="Durvash" className="form-control" id="username" name="username" onChange={(e) => { setUsername(e.target.value) }} value={username} required="required" />
                            </div>
                            <div className="control-group">
                                <label>Password</label>
                                <input type="password" placeholder="**********" className="form-control" id="password" name="password" onChange={(e) => { setPassword(e.target.value) }} value={password} required="required" />
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;