import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetDetails from "../../hooks/useGetDetails";
import Rating from "react-rating-stars-component";
import Loading from "../loading/Loading";
function ProductDetails() {
  const { id } = useParams();
  const [prodDetails, loading, error] = useGetDetails(
    `https://fakestoreapi.com/products/${id}`
  );
  return (
    <Loading loading={loading} error={error}>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-5">
            <img src={prodDetails.image} alt="" className=" img-fluid" />
          </div>
          <div className=" offset-lg-1 col-md-6 ">
            <h2>{prodDetails.title}</h2>
            <p className="text-muted">{prodDetails.category}</p>
            <h5>
              <span>EGP </span>
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
        </div>
      </div>
    </Loading>
  );
}
export default ProductDetails;
