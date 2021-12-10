import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProduct(data[parseInt(id) - 1]))
    }, [id])

    return (
        <div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 my-5 text-center">
                    <Card className="bg-dark text-white border-0 shadow-lg">
                        <Card.Img src={product?.image} alt="Card image" className="p-2" width="50px" height="500px" />
                        <Card.ImgOverlay className="px-4 py-5" style={{ backgroundColor: 'black', opacity: '.7' }}>
                            <Card.Title className="mt-5 fs-2">{product?.title}</Card.Title>
                            <Card.Text>
                                {product?.description}
                            </Card.Text>
                            <Card.Text>
                                <h5>Category: {product?.category}</h5>
                                <h5> Ratings: {product?.rating?.rate}/5 ({product?.rating?.count})</h5>
                                <h3>Price: $ {product?.price}</h3>
                                <Link to="/home">
                                    <button className="btn btn-outline-light mt-3 rounded-pill px-4 me-2">Back</button>
                                </Link>
                                <Link to="/order">
                                    <button className="btn btn-outline-light mt-3 rounded-pill px-4">Buy Now</button>
                                </Link>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default ProductDetails;