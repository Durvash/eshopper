import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import SkeltonLoader from "../SkeltonLoader/SkeltonLoader";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/Actions";

function findItemById(array, id) {
    return array.find((element) => {
        return element.id === id;
    })
}

const Products = () => {
    
    const [PRODUCT_DATA, setProducts] = useState([]);
    const [PRODUCT_COUNT, setProductCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [PER_PAGE] = useState(6);
    const [CURRENT_PAGE, setCurrentPage] = useState(0);
    
    var skelton_setting = [
        {"width":350, "height":350},
        {"width":350, "height":350},
        {"width":350, "height":350},
        {"width":350, "height":350}
    ];

    useEffect(() => {
        fetchProducts(0);
    }, []);
    
    const fetchProducts = (skip_prods) => {
        setLoading(true);
        axios.get("https://dummyjson.com/products?limit=6&skip="+(skip_prods))
        .then((res) => {
            // console.log(res);
            setProducts(res.data.products);
            setProductCount(res.data.total);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }

    ///////// PAGGINATION //////////
    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        fetchProducts(pageNumber*PER_PAGE);
    }
    
    const Pagination = (PER_PAGE, totalPosts, paginate) => {

        const pageNumbers = [];
      
        for (let i = 0; i < Math.ceil(totalPosts / PER_PAGE); i++) {
          pageNumbers.push(i);
        }
        
        return (
            <div className="col-12 pb-1">
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center mb-3">
                        <li className="page-item">
                            <a onClick={() => (CURRENT_PAGE == 0) ? '' : paginate(pageNumbers[0])} className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        
                        {pageNumbers.map(number => (
                            <li key={number} className={'page-item ' + ((number == CURRENT_PAGE) ? 'active' : '')}>
                                <a onClick={() => (number == CURRENT_PAGE) ? '' : paginate(number)} className='page-link'>
                                    {number + 1}
                                </a>
                            </li>
                        ))}

                        <li className="page-item">
                            <a onClick={() => (CURRENT_PAGE == pageNumbers.length - 1) ? '' : paginate(pageNumbers.length - 1)} className="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }

    const displayProducts = (item) => {
        return (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
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
                        <Link to={"/product-detail/"+item.id} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                        <Link to="" onClick={() => { addToCartItem(item.id) }} className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</Link>
                    </div>
                </div>
            </div>
        )
    }

    const dispatch = useDispatch();

    const addToCartItem = (id) => {
        var item_data = PRODUCT_DATA.find((element) => {
            return element.id === id;
        })
        
        if(item_data) {
            dispatch(addToCart(item_data));
        }
    }

    return (
        <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
                <div className="col-12 pb-1">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search by name" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div className="dropdown ml-4">
                            <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                        Sort by
                                    </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                <a className="dropdown-item" href="#">Latest</a>
                                <a className="dropdown-item" href="#">Popularity</a>
                                <a className="dropdown-item" href="#">Best Rating</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {loading ? <SkeltonLoader setting={skelton_setting}/> :
                PRODUCT_DATA.map((item) => (
                    displayProducts(item)
                ))}

                {Pagination(PER_PAGE, PRODUCT_COUNT, paginate)}
            </div>
        </div>
    )
}

export default Products;