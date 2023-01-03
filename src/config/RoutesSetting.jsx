import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProductListing from "../pages/ProductListing";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ProtectedRoutes from "../Hooks/ProtectedRoutes";

const RoutesSetting = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/product" element={<ProductListing/>} />
            <Route exact path="/product-detail/:id" element={<ProductDetail/>} />

            <Route exact path="/cart" element={<ProtectedRoutes Component={Cart} />} />
            <Route exact path="/checkout" element={<ProtectedRoutes Component={Checkout} />} />
            
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="*" element={<div class="text-center">Page Not Found..!!</div>} />
        </Routes>
    )
}

export default RoutesSetting;