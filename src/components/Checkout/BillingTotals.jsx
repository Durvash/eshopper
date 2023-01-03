import React from "react";
import { useSelector } from "react-redux";
import { shortLongText } from "../../helper/General";

const BillingTotals = () => {
    const cartData = useSelector((state) => state);
    var SubTotal = 0;
    var Shipping = 10;
    var Total = SubTotal + Shipping;

    cartData.ProductReducer.map((item) => {
        SubTotal += item.total_price;
        Total = SubTotal + Shipping;
    });
    
    return (
        <div className="col-lg-4">
            <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                    <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                </div>
                <div className="card-body">
                    <h5 className="font-weight-medium mb-3">Products</h5>
                    {
                        cartData.ProductReducer.map((item) => {
                            return (
                                <div className="d-flex justify-content-between">
                                    <p title={item.title}>{shortLongText(item.title, 30)}</p>
                                    <p>${item.total_price.toFixed(2)}</p>
                                </div>
                            )
                        })
                    }
                    
                    <hr className="mt-0" />
                    <div className="d-flex justify-content-between mb-3 pt-1">
                        <h6 className="font-weight-medium">Subtotal</h6>
                        <h6 className="font-weight-medium">${SubTotal.toFixed(2)}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6 className="font-weight-medium">Shipping</h6>
                        <h6 className="font-weight-medium">${Shipping.toFixed(2)}</h6>
                    </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                    <div className="d-flex justify-content-between mt-2">
                        <h5 className="font-weight-bold">Total</h5>
                        <h5 className="font-weight-bold">${Total.toFixed(2)}</h5>
                    </div>
                </div>
            </div>
            <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                    <h4 className="font-weight-semi-bold m-0">Payment</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                            <label className="custom-control-label" for="paypal">Paypal</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                            <label className="custom-control-label" for="directcheck">Direct Check</label>
                        </div>
                    </div>
                    <div className="">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                            <label className="custom-control-label" for="banktransfer">Bank Transfer</label>
                        </div>
                    </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                    <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default BillingTotals;