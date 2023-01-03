import React from "react";
import BillingDetail from "./BillingDetail";
import BillingTotals from "./BillingTotals";

const CheckoutList = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <BillingDetail/>
                <BillingTotals/>
            </div>
        </div>
    )
}

export default CheckoutList;