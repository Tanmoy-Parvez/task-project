import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DisplayProducts from './DisplayProducts/DisplayProducts';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])

    const product = useSelector(state => state.allProducts.products)

    useEffect(() => {
        setProducts(product)
    }, [])

    return (
        <div>
            <div className="container">
                <div className="search-field">
                    <div className="search-box">
                        <input type="search" className="form-control" placeholder="Search your products" />
                        <button type="submit" className="btn btn-info buttonStyle">Search</button>
                    </div>
                </div>
            </div>


            <div className="container mt-4 my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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