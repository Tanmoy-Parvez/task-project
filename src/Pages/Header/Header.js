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
                            <button type="button" style={{ border: "none", fontWeight: "500" }} className="btn btn-primary position-relative nav-backgroud">
                                <i className="fas fa-shopping-cart"></i> Cart
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    0
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav >

        </div>
    );
};

export default Header;