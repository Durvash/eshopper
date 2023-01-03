import React from "react";
import CartTotals from "./CartTotals";
import Products from "./Products";

const CartList = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <Products/>
                <CartTotals/>
            </div>
        </div>
    )
}

export default CartList;