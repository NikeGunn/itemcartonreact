import React from 'react'
import Product from './Product'

const ProductList = (props) => {

    return (
        
            props.productList.length > 0 ?
            props.productList.map((product,i) => {
            return <Product allproducts= {product} key = {i} incrementHandler={props.incrementHandler} index = {i} 
            decrementHandler={props.decrementHandler} 
            removeItem = {props.removeItem}/>
        })
        : <h1 className="text-center">No Products</h1>
    )
}

export default ProductList
