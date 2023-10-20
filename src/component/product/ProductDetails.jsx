import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";
function ProductDetails() {
    const { id } = useParams();
    const [prodDetails, setProdDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const getDetails = () => {
        return fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => {
                setProdDetails(json);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            });
    };
    useEffect(() => {
        getDetails();
    }, []);
    return (
        <>
            {loading ? (<div className="container py-5 text-center vh-100 d-flex justify-content-center align-items-center">
                <span class="loader"></span>
            </div>) : prodDetails ? (
                <div className="container py-5 my-5">
                    <div className="row">
                        <>
                            <div className="col-md-5">
                                <img
                                    src={prodDetails.image}
                                    alt=""
                                    className=" img-fluid"

                                />
                            </div>
                            <div className=" offset-lg-1 col-md-6 ">
                                <h2>{prodDetails.title.split(" ").splice(0, 5).join(" ")}</h2>
                                <p className="text-muted">{prodDetails.category}</p>
                                <h5>
                                    <span >
                                        EGP </span>
                                    {prodDetails.price}
                                </h5>
                                {prodDetails.rating && (
                                    <Rating
                                        value={prodDetails.rating.rate}
                                        edit={false}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                )}
                                <p className="text-muted mb-5">{prodDetails.description} </p>
                                <button className="btn btn-warning">Add to cart</button>
                            </div>
                        </>
                    </div>
                </div>
            ) : (
                <p>Item is not found</p>
            )}
        </>
    );
}
export default ProductDetails;

