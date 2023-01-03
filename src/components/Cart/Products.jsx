import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage, shortLongText } from "../../helper/General";
import { addToCart, removeToCart, UpdateToCart } from "../../redux/actions/Actions";
var image_url = process.env.REACT_APP_IMG_URL;

const Products = () => {
    
    ///// To get Data from Redux data array
    const cartData = useSelector((state) => state);

    const dispatch = useDispatch();

    const updateCartItemQty = (id, qty) => {
        let item = {id:id, qty:qty};
        dispatch(UpdateToCart(item));
    }

    const removeCartItem = (id) => {
        dispatch(removeToCart(id));
    }

    const updateProductQty = (action,id) => {
        cartData.ProductReducer.map((item) => {
            if(item.id === id) {
                if(action == "add") {
                    if(item.qty < 5) {
                        let newItem = {...item, type:'add'}
                        dispatch(addToCart(newItem));
                    } else {
                        errorMessage('Maximum 5 items allow to add in cart..!!');
                    }
                } else if(action == "minus") {
                    if(item.qty > 1) {
                        let newItem = {...item, type:'minus'}
                        dispatch(addToCart(newItem));
                    } else {
                        errorMessage('Atleast 1 item have in cart..!!');
                    }
                }
            }
        });
    }

    return (
        <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
                <thead className="bg-secondary text-dark">
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {(cartData.ProductReducer.length > 0) ? cartData.ProductReducer.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td className="align-middle text-left" title={item.title}><img src={item.thumbnail} alt={item.title} className="w-50px h-50px" /> {shortLongText(item.title,40)}</td>
                                <td className="align-middle text-right">${item.price}</td>
                                <td className="align-middle">
                                    <div className="input-group quantity mx-auto w-100px">
                                        <div className="input-group-btn">
                                            <button onClick={()=>{updateProductQty("minus",item.id)}} className="btn btn-sm btn-primary btn-minus" >
                                            <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.qty} />
                                        <div className="input-group-btn">
                                            <button onClick={()=>{updateProductQty("add",item.id)}} className="btn btn-sm btn-primary btn-plus">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">${item.total_price}</td>
                                <td className="align-middle"><button onClick={() => { removeCartItem(item.id) }} className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                            </tr>
                        )
                    }) : <tr>
                            <td colSpan="5" className="align-middle text-center">Empty Cart</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products;