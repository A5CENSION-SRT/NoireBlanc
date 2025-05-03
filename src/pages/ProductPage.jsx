import React from 'react'
import { useParams } from 'react-router-dom'
import ProductsData from '../data/ProductData'
import Navbar from '../components/Navbar/Navbar'
import IndProdPage from '../components/IndProdPage/IndProdPage'

const ProductPage = () => {
    const { id } = useParams()
    const product = ProductsData.find((product) => product.id === Number(id))
  return (
    <div>
    <Navbar/>
    <IndProdPage product={product}/>
    </div>
  )
}

export default ProductPage
