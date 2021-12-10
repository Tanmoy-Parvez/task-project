import React from 'react';
import { Link } from 'react-router-dom';
import GifImg from '../../Image/orderImg.gif'

const Order = () => {
    return (
        <div className="text-center mt-5">
            <div>
                <img src={GifImg} alt="" />
            </div>
            <h1 className="text-success text-uppercase mt-3"> Your Order has been successfully placed!!!</h1>
            <Link to="/home">
                <button className="btn btn-outline-success mt-3 rounded-pill px-4">Shop More</button>
            </Link>
        </div>
    );
};

export default Order;