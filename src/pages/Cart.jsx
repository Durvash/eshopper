import React from "react";
import Header from "../components/Header";
import CartList from "../components/Cart/CartList"

const Cart = () => {
    return (
        <div>
            <Header header_title="SHOPPING CART" header_page="
Shopping Cart"/>
            <CartList/>
        </div>
    )
}

export default Cart;