import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux"; 
import { Link } from "react-router-dom";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const CACHE = {};
const PER_PAGE = 50;
const SEARCH_URI = 'https://api.github.com/search/users';

function makeAndHandleRequest(query, page = 1) {
    return fetch(`${SEARCH_URI}?q=${query}+in:login&page=${page}&per_page=50`)
    .then((resp) => resp.json())
    .then(({ items, total_count }) => {
        const options = items.map((i) => ({
            avatar_url: i.avatar_url,
            id: i.id,
            login: i.login,
        }));
        return { options, total_count };
    });
}

const Topbar = () => {

    ///// To get Data from Redux data array
    const cartData = useSelector((state) => state);
    var cart_count = 0;
    cartData.ProductReducer.map((item) => {
        cart_count += item.qty;
    });

    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const [query, setQuery] = useState('');

    const handleInputChange = (q) => {
        setQuery(q);
    };
    
    const handlePagination = (e, shownResults) => {
        const cachedQuery = CACHE[query];

        // Don't make another request if:
        // - the cached results exceed the shown results
        // - we've already fetched all possible results
        if (
            cachedQuery.options.length > shownResults ||
            cachedQuery.options.length === cachedQuery.total_count
        ) {
            return;
        }

        setIsLoading(true);

        const page = cachedQuery.page + 1;

        makeAndHandleRequest(query, page).then((resp) => {
            const options = cachedQuery.options.concat(resp.options);
            CACHE[query] = { ...cachedQuery, options, page };

            setIsLoading(false);
            setOptions(options);
        });
    };

    // `handleInputChange` updates state and triggers a re-render, so
    // use `useCallback` to prevent the debounced search handler from
    // being cancelled.
    const handleSearch = useCallback((q) => {
        if (CACHE[q]) {
        setOptions(CACHE[q].options);
        return;
        }

        setIsLoading(true);
        makeAndHandleRequest(q).then((resp) => {
        CACHE[q] = { ...resp, page: 1 };

        setIsLoading(false);
        setOptions(resp.options);
        });
    }, []);

    return (
        <div className="container-fluid stikey-header">
            <div className="row bg-secondary py-2 px-xl-5">
                <div className="col-lg-6 d-none d-lg-block">
                    <div className="d-inline-flex align-items-center">
                        <Link to="/" className="text-dark" href="">FAQs</Link>
                        <span className="text-muted px-2">|</span>
                        <Link to="/" className="text-dark" href="">Help</Link>
                        <span className="text-muted px-2">|</span>
                        <Link to="/" className="text-dark" href="">Support</Link>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <Link to="/" className="text-dark px-2">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" className="text-dark px-2">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/" className="text-dark px-2">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to="/" className="text-dark px-2">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" className="text-dark pl-2">
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <Link to="/" className="text-decoration-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </Link>
                </div>
                <div className="col-lg-6 col-6 text-left">
                    <form action="">
                        <div className="input-group">
                            <AsyncTypeahead
                                id="search_products"
                                isLoading={isLoading}
                                labelKey="login"
                                maxResults={PER_PAGE - 1}
                                minLength={2}
                                onInputChange={handleInputChange}
                                onPaginate={handlePagination}
                                onSearch={handleSearch}
                                options={options}
                                paginate
                                placeholder="Search by product name..."
                                renderMenuItemChildren={(option) => (
                                    <div key={option.id}>
                                        <div style={{float:"left"}}>
                                            <img alt={option.login} src={option.avatar_url} style={{width:"50px",height:"50px",marginRight:"15px"}} />
                                        </div>
                                        <div style={{float:"left"}}>
                                            <div><strong>{option.login}</strong></div>
                                            <div><small>Category: {option.login}</small></div>
                                        </div>
                                    </div>
                                )}
                                useCache={false}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent text-primary">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-6 text-right">
                    <Link to="/" className="btn border">
                        <i className="fas fa-heart text-primary"></i>
                        <span className="badge">0</span>
                    </Link>
                    <Link to="/cart" className="btn border">
                        <i className="fas fa-shopping-cart text-primary"></i>
                        <span className="badge">{cart_count}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Topbar;