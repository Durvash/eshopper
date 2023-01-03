import React from "react";
import { cssTransition, toast } from "react-toastify";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
// import "animate.css";

export const shortLongText = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + ".." : str;
};

export const Logout = () => {
  localStorage.clear();
  window.location.href = "http://localhost:3000/";
};

export const hidePageLoader = () => {
  document.querySelector(".loading").style.display = "none";
};

export const showPageLoader = () => {
  document.querySelector(".loading").style.display = "block";
};

export const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

export const successMessage = (message) => {
  toast.dark(message, {
    type: "success",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    transition: bounce,
  });
};

export const errorMessage = (message) => {
  toast.dark(message, {
    type: "error",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    transition: bounce,
  });
};

export const warningMessage = (message) => {
  toast.dark(message, {
    type: "warning",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    transition: bounce,
  });
};
