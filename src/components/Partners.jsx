import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
var image_url = process.env.REACT_APP_IMG_URL;

const options = {
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    },
};

const Partners = () => {
    return (
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col">
                    <OwlCarousel className="owl-theme owl-carousel vendor-carousel" {...options}>
                        <div className="vendor-item border p-4">
                            <img src={image_url+"vendor-1.jpg"} alt="" />
                        </div>
                        <div className="vendor-item border p-4">
                            <img src={image_url+"vendor-2.jpg"} alt="" />
                        </div>
                        <div className="vendor-item border p-4">
                            <img src={image_url+"vendor-3.jpg"} alt="" />
                        </div>
                        <div className="vendor-item border p-4">
                            <img src={image_url+"vendor-4.jpg"} alt="" />
                        </div>
                        <div className="vendor-item border p-4">
                            <img src={image_url+"vendor-5.jpg"} alt="" />
                        </div>
                        <div className="vendor-item border p-4">
                            <img src={image_url+"vendor-6.jpg"} alt="" />
                        </div>
                        <div className="vendor-item border p-4">
                            <img src={image_url+"vendor-7.jpg"} alt="" />
                        </div>
                        <div className="vendor-item border p-4">
                            <img src={image_url+"vendor-8.jpg"} alt="" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Partners;