import React from "react";

const SkeltonLoader = (props) => {
    return (
        <div className="skelton-loader">
        {props.setting.map((item, ind) => (
            <div key={ind} className="col-sm-6 col-md-3">
                <div className="movie--isloading">
                <div className="loading-image"></div>
                <div className="loading-content">
                    <div className="loading-text-container">
                    <div className="loading-main-text"></div>
                    <div className="loading-sub-text"></div>
                    </div>
                    <div className="loading-btn"></div>
                </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default SkeltonLoader;