import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { Link } from "react-router-dom";
var image_url = process.env.REACT_APP_IMG_URL;

const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
};

const ProductSuggest = (props) => {
    var Category = props.category;
    const [SUGGESTED_PRODUCT, setSuggestedProducts] = useState([]);

    useEffect(() => {
        getSuggestedProducts(Category);
    }, []);
    
    const getSuggestedProducts = async (Category) => {
        await axios.get("https://dummyjson.com/products/category/" + Category).then((result) => {
            setSuggestedProducts(result.data.products);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="container-fluid py-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">You May Also Like</span></h2>
            </div>
            <div className="row px-xl-5">
                <div className="col">
                    <OwlCarousel className="owl-carousel related-carousel" {...options}>
                        {
                            SUGGESTED_PRODUCT.map((item) => {
                                return (
                                    <div key={item.id} className="card product-item border-0">
                                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                            <img className="img-fluid w-100" src={item.thumbnail} alt={item.title} />
                                        </div>
                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                            <h6 className="text-truncate mb-3">{item.title}</h6>
                                            <div className="d-flex justify-content-center">
                                                <h6>${item.price}</h6><h6 className="text-muted ml-2"><del>${(item.price + (item.price * item.discountPercentage / 100)).toFixed(0)}</del></h6>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between bg-light border">
                                            <Link to={"/product-detail/" + item.id} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                            <Link to="/" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default ProductSuggest;