import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayProducts.css';

AOS.init();

const DisplayProducts = ({ product }) => {
    const { title, price, description, image, id } = product;
    return (
        <div data-aos="flip-left" data-aos-delay="350">
            <div className="col h-100 text-center">
                <div className="card py-2 border-0  card-style">
                    <img src={image} className="mx-auto" height="150px" width="150px" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-title">${price}</h6>
                        <p className="card-text">{description.slice(0, 110)}</p>
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-outline-dark rounded-pill px-4">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DisplayProducts;