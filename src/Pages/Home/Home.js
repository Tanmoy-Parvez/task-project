import React, { useEffect, useState } from 'react';
import DisplayProducts from './DisplayProducts/DisplayProducts';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    })

    return (
        <div>
            <h1 className="text-center">Welcome to task project of Redux Learner Team</h1>
            <div className="container">
                <div class="search-field">
                    <div class="search-box">
                        <input type="search" class="form-control" placeholder="Search your products" />
                        <button type="submit" class="btn btn-info buttonStyle">Search</button>
                    </div>
                </div>
            </div>


            <div className="container mt-4">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                    {
                        products.map(product => <DisplayProducts
                            key={product.id}
                            product={product}
                        ></DisplayProducts>)
                    }

                </div>
            </div>



        </div>
    );
};

export default Home;