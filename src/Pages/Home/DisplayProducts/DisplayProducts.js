import React from 'react';

const DisplayProducts = ({ product }) => {
    const { title, price, description, image } = product;


    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={image} style={{ width: "200px", height: "200px" }} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <h6 class="card-title">${price}</h6>
                        <p class="card-text">{description}</p>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DisplayProducts;