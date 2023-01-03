import React from "react";
import { useParams } from "react-router-dom"; 
import Header from "../components/Header";
import Detail from "../components/product_detail/Detail";

const ProductDetail = () => {
    const params = useParams();
    return (
        <div>
            <Header header_title="SHOP DETAIL" header_page="Shop Detail"/>
            <Detail prod_id={params.id} />
        </div>
    )
}

export default ProductDetail;