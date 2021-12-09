import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../Image/404-png.png'

const NotFound = () => {
    return (
        <div className="text-center my-5">
            <div>
                <img src={errorImg} alt="" className="img-fluid" />

            </div>
            <Link to="/home">
                <button className="btn btn-outline-dark mt-5">Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;