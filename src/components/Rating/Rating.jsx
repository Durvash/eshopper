import React from "react";

const Rating = (props) => {
    // console.log(props);
    return (
        props.rate >= 5 ?
        <>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
        </>
        : props.rate >= 0.5 && props.rate < 1 ?
        <>
            <small className="fas fa-star-half-alt"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
        </>
        : props.rate >= 1 && props.rate < 1.5 ?
        <>
            <small className="fas fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
        </>
        : props.rate >= 1.5 && props.rate < 2 ?
        <>
            <small className="fas fa-star"></small>
            <small className="fas fa-star-half-alt"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
        </>
        : props.rate >= 2 && props.rate < 2.5 ?
        <>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
        </>
        : props.rate >= 2.5 && props.rate < 3 ?
        <>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star-half-alt"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
        </>
        : props.rate >= 3 && props.rate < 3.5 ?
        <>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
        </>
        : props.rate >= 3.5 && props.rate < 4 ?
        <>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star-half-alt"></small>
            <small className="far fa-star"></small>
        </>
        : props.rate >= 4 && props.rate < 4.5 ?
        <>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="far fa-star"></small>
        </>
        : props.rate >= 4.5 && props.rate < 5 ?
        <>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star-half-alt"></small>
        </>
        : 
        <>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
            <small className="far fa-star"></small>
        </>
    )
}

export default Rating;