import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="mb-5">
            <nav className="navbar navbar-expand-lg navbar-light  nav-backgroud  fixed-top ">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white fw-bold animate__animated animate__rubberBand" to="#">
                        Smart Shopping Store </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navigationLink ms-auto">
                            <Link to="/">Home</Link>
                            <Link to="/cart" className="position-relative">
                                <i className="fas fa-shopping-cart"></i> Cart
                                <span className="position-absolute top--1 start-49 ms-3 translate-middle badge rounded-pill bg-danger">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav >

        </div>
    );
};

export default Header;