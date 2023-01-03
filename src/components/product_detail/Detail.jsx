import React from "react";
import { useState, useEffect, useReducer, useCallback } from "react";
import ProductSuggest from "./ProductSuggest";
import axios from "axios";
// import ReactStars from "react-rating-stars-component";
import Rating from "../Rating/Rating";
import { addToCart } from "../../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

var image_url = process.env.REACT_APP_IMG_URL;

//// To Update Qty of Product
const reducerUpdateQty = (state, action) => {
    switch (action) {
        case 'add':
            return (state < 5) ? state+1 : 5;
            break;
        case 'minus':
            return (state > 1) ? state-1 : 1;
            break;
        default:
            throw new Error('Unexpected action');
    }
}

const Detail = (props) => {
    const prod_id = props.prod_id;
    const [product_detail, setProductDetail] = useState([]);
    const [product_images, setProductImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const [product_qty, dispatchProductQty] = useReducer(reducerUpdateQty, 1);

    ///// To get Data from Redux data array
    const cartData = useSelector((state) => state);
    // console.log(cartData);
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetchProuctDetail(prod_id);
    }, [prod_id]);

    const fetchProuctDetail = useCallback((prod_id) => {
        setLoading(true);
        axios.get("https://dummyjson.com/products/"+prod_id)
        .then((res) => {
            // console.log(res);
            setProductDetail(res.data);
            setProductImages(res.data.images);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [product_detail]);
    
    const addToCartItem = () => {
        let item = {...product_detail, qty: product_qty, type:'input'}
        dispatch(addToCart(item));
    }

    return (
        <>
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner border carousel-hgt">
                                <Carousel showArrows={true} thumbWidth={60}>
                                {
                                    product_images.map((img, ind) => {
                                        return (
                                        <div key={ind} className="carousel-item active">
                                            <img className="w-100" src={img} alt={product_detail.title} />
                                        </div>)
                                    })
                                }
                                </Carousel>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <h3 className="font-weight-semi-bold">{product_detail.title}</h3>
                        <div className="d-flex mb-3">
                            <div className="text-primary mr-2">
                                <Rating rate={product_detail.rating}/>
                            </div>
                            <small className="pt-1">(210 Reviews)</small>
                        </div>
                        <h3 className="font-weight-semi-bold mb-4">${product_detail.price}</h3>
                        <p className="mb-4">{product_detail.description}</p>
                        <div className="d-flex mb-3">
                            <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                            <form>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                    <label className="custom-control-label" htmlFor="size-1">XS</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                    <label className="custom-control-label" htmlFor="size-2">S</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                    <label className="custom-control-label" htmlFor="size-3">M</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                    <label className="custom-control-label" htmlFor="size-4">L</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                    <label className="custom-control-label" htmlFor="size-5">XL</label>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex mb-4">
                            <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                            <form>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                    <label className="custom-control-label" htmlFor="color-1">Black</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                    <label className="custom-control-label" htmlFor="color-2">White</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                    <label className="custom-control-label" htmlFor="color-3">Red</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                    <label className="custom-control-label" htmlFor="color-4">Blue</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                    <label className="custom-control-label" htmlFor="color-5">Green</label>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3 w-130">
                                <div className="input-group-btn">
                                    <button onClick={()=>{dispatchProductQty('minus')}} className="btn btn-primary btn-minus" >
                                    <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-secondary text-center" value={product_qty} />
                                <div className="input-group-btn">
                                    <button onClick={()=>{dispatchProductQty('add')}} className="btn btn-primary btn-plus">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button onClick={addToCartItem} className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                        </div>
                        <div className="d-flex pt-2">
                            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                            <div className="d-inline-flex">
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                            <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab-pane-1">
                                <h4 className="mb-3">Product Description</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                            </div>
                            <div className="tab-pane fade" id="tab-pane-2">
                                <h4 className="mb-3">Additional Information</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul> 
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-pane-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                                        <div className="media mb-4">
                                            <img src={image_url+"user.jpg"} alt="Image" className="img-fluid mr-3 mt-1 w-45" />
                                            <div className="media-body">
                                                <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                                <div className="text-primary mb-2">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="mb-4">Leave a review</h4>
                                        <small>Your email address will not be published. Required fields are marked *</small>
                                        <div className="d-flex my-3">
                                            <p className="mb-0 mr-2">Your Rating * :</p>
                                            <div className="text-primary">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="message">Your Review *</label>
                                                <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Your Name *</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Your Email *</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group mb-0">
                                                <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {
                (product_detail.category) ? <ProductSuggest category={product_detail.category}/> : ''
            }
        </>
    )
}

export default Detail;