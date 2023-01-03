import React from "react";
import Header from "../components/Header";
import CheckoutList from "../components/Checkout/CheckoutList";

const Checkout = () => {
    return (
        <div>
            <Header header_title="CHECKOUT" header_page="Checkout" />
            <CheckoutList/>
        </div>
    )
}

export default Checkout;