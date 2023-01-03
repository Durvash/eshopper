import React from "react";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import Offer from "../components/Offer";
import ProductList from "../components/ProductList";
import Subscribe from "../components/Subscribe";
import Partners from "../components/Partners";

const Home = () => {
    return (
        <div>
            <Featured/>
            <Categories/>
            <Offer/>
            <ProductList/>
            <Subscribe/>
            <Partners/>
        </div>
    )
}

export default Home;