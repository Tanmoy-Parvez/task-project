import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  nav-backgroud">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white fw-bold" to="#">

                        Smart Shopping Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navigationLink ms-auto">
                            <Link to="/">Home</Link>
                            <Link to="/products">Products</Link>
                            <button type="button" style={{ border: "none", fontWeight: "500" }} class="btn btn-primary position-relative nav-backgroud">
                                <i class="fas fa-shopping-cart"></i> Cart
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    0

                                </span>
                            </button>
                            <Link to="/aboutus">About Us</Link>
                            {/* 
                            <Link to="/contactus">Contact Us</Link> */}
                        </div>
                    </div>
                </div>
            </nav >

        </div>
    );
};

export default Header;