import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logout } from "../helper/General";
var image_url = process.env.REACT_APP_IMG_URL;

const Navbar = () => {
    const location = useLocation();

    const handleLogout = (e) => {
        e.preventDefault();
        Logout();
    }
    
    let login_token = localStorage.getItem('login_token');
    const LoginLogoutLink = () => {
        if(!login_token)
        return(
            <>
                <Link to="/login" className="nav-item nav-link">Login</Link>
                <Link to="/signup" className="nav-item nav-link">Register</Link>
            </>
        )

        return(
            <div>
                <Link to="/" onClick={handleLogout} className="nav-item nav-link">Logout</Link>
            </div>
        )
    }

    ///// Navbar with header slider
    if (location.pathname === '/')

    return (
        <div className="container-fluid mb-5 stikey-header-bot-mar">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 a-categories" data-toggle="collapse" href="#navbar-vertical">
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                        <div className="navbar-nav w-100 overflow-hidden h-410">
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></Link>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <Link to="#" className="dropdown-item">Men's Dresses</Link>
                                    <Link to="#" className="dropdown-item">Women's Dresses</Link>
                                    <Link to="#" className="dropdown-item">Baby's Dresses</Link>
                                </div>
                            </div>
                            <Link to="#" className="nav-item nav-link">Shirts</Link>
                            <Link to="#" className="nav-item nav-link">Jeans</Link>
                            <Link to="#" className="nav-item nav-link">Swimwear</Link>
                            <Link to="#" className="nav-item nav-link">Sleepwear</Link>
                            <Link to="#" className="nav-item nav-link">Sportswear</Link>
                            <Link to="#" className="nav-item nav-link">Jumpsuits</Link>
                            <Link to="#" className="nav-item nav-link">Blazers</Link>
                            <Link to="#" className="nav-item nav-link">Jackets</Link>
                            <Link to="#" className="nav-item nav-link">Shoes</Link>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <Link to="#" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/product" className="nav-item nav-link">Shop</Link>
                                <Link to="/cart" className="nav-item nav-link">Shopping Cart</Link>
                                <Link to="/checkout" className="nav-item nav-link">Checkout</Link>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                            {
                                <LoginLogoutLink />
                            }
                            </div>
                        </div>
                    </nav>
                    <div id="header-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active h-410">
                                <img className="img-fluid" src={image_url+"carousel-1.jpg"} alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3 m-w-700">
                                        <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                        <Link to="#" className="btn btn-light py-2 px-3">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item h-410">
                                <img className="img-fluid" src={image_url+"carousel-2.jpg"} alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3 m-w-700">
                                        <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                        <Link to="#" className="btn btn-light py-2 px-3">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                            <div className="btn btn-dark w-h-45">
                                <span className="carousel-control-prev-icon mb-n2"></span>
                            </div>
                        </a>
                        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                            <div className="btn btn-dark w-h-45">
                                <span className="carousel-control-next-icon mb-n2"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

    ///// Navbar without header slider
    return (
        <div className="container-fluid stikey-header-bot-mar">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 a-categories" data-toggle="collapse" href="#navbar-vertical">
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light without-header-slider" id="navbar-vertical">
                        <div className="navbar-nav w-100 overflow-hidden h-410">
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></Link>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <Link to="#" className="dropdown-item">Men's Dresses</Link>
                                    <Link to="#" className="dropdown-item">Women's Dresses</Link>
                                    <Link to="#" className="dropdown-item">Baby's Dresses</Link>
                                </div>
                            </div>
                            <Link to="#" className="nav-item nav-link">Shirts</Link>
                            <Link to="#" className="nav-item nav-link">Jeans</Link>
                            <Link to="#" className="nav-item nav-link">Swimwear</Link>
                            <Link to="#" className="nav-item nav-link">Sleepwear</Link>
                            <Link to="#" className="nav-item nav-link">Sportswear</Link>
                            <Link to="#" className="nav-item nav-link">Jumpsuits</Link>
                            <Link to="#" className="nav-item nav-link">Blazers</Link>
                            <Link to="#" className="nav-item nav-link">Jackets</Link>
                            <Link to="#" className="nav-item nav-link">Shoes</Link>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <Link to="#" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/product" className="nav-item nav-link">Shop</Link>
                                <Link to="/cart" className="nav-item nav-link">Shopping Cart</Link>
                                <Link to="/checkout" className="nav-item nav-link">Checkout</Link>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                            {
                                <LoginLogoutLink />
                            }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;