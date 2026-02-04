import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    let location=useLocation([]);
    console.log(location)
  return (
    <div>
        <img src={location.state.image} alt="" />
       <h1>{location.state.title}</h1>
       <p>{location.state.description}</p>
       <h3>Price :₹{location.state.price}</h3>
       <h2>⭐{location.state.rating.rate}</h2>
    </div>
  )
}

export default ProductDetails
