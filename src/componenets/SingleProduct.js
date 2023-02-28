import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import useFetch from '../Fetcher/useFetch'
import {Link, useParams} from 'react-router-dom'


const SingleProduct = () => {
  const {id} = useParams()
  const {data, isLoading, error} = useFetch(
    `https://fakestoreapi.com/products/${id}`
  )
  console.log(id)
  const {title, description, price, rating, image} = data
  return (
    <div>
        {isLoading && <PulseLoader/>}
        {error && <h2>{error.message}</h2>}
        <h2  id='jc'><span>Single</span> product</h2>
        <img src={image} alt="" id='single' />
        <h2 id='tit'>{title}</h2>
        <p id='des'>{description}</p>
        <h3 id='sp'>₦{price}</h3>
        <Link to='/Products'> <button id='bpp'>Back To Products Page</button></Link>

    </div>
  )
}

export default SingleProduct