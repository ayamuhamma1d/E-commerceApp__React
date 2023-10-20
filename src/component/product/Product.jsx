import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';
import './Product.css'
const Product = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const getAllProducts = () => {
        setLoading(true)
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setLoading(false)
                setProducts(json)
            })
            .catch((error) => {
                setLoading(false);
            });
    }
    useEffect(() => {
        getAllProducts();
    }, []);
    if (loading) {
        return <div className="container py-5 text-center vh-100 d-flex justify-content-center align-items-center">
            <span class="loader"></span>
        </div>
    }
    return (
        <>
            <div className="container py-5 my-5">
                <div className="row g-4">
                    {products?.map((product => {
                        return (
                            <div className="col-md-3 d-flex align-items-stretch ">
                                <Card className="border-0 bg-white shadow-lg p-2 " >
                                    <Link to={`/product/${product.id}`}>
                                        <Card.Img variant="top" className="py-2" src={product.image} />
                                    </Link>
                                    <Card.Body >
                                        <Card.Title className="fs-3">{product.title.split(" ").splice(0, 1).join(" ")}</Card.Title>
                                        <Card.Text className='mb-1 fs-6'>
                                            {product.description.split(" ").splice(0, 3).join(" ")}
                                        </Card.Text>
                                        <p  className='mb-1 '><span>category</span> {product.category}</p>
                                        {product.rating && (
                                            <Rating
                                                value={product.rating.rate}
                                                edit={false}
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                        )}
                                        <h5><span>EGP</span> {product.price}</h5>
                                        <Link to={`/product/${product.id}`} className="btn btn-warning">Show Item</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }))}
                </div>
            </div>
        </>
    )
}
export default Product