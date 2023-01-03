import React from "react";
import Header from "../components/Header";
import Listing from "../components/ProductListing/Listing";

const ProductListing = () => {
    return (
        <div>
            <Header header_title="OUR SHOP" header_page="Shop"/>
            <Listing/>
        </div>
    )
}

export default ProductListing;