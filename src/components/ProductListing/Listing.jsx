import React from "react";
import Filters from "./Filters";
import Products from "./Products";

const Listing = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <Filters/>
                <Products/>
            </div>
        </div>
    )
}

export default Listing;