import React from 'react'

const Footer = (props) => {
  return (

      <div className="row fixed-bottom">
        <button onClick={()=> {props.resetQuantity()}} className='btn btn-danger col-2'>Reset</button>

        <div className='col-8 bg-warning text-white text-center'>
        <h1><span className="badge bg-secondary">Subtotal Rs. {props.totalAmount}</span></h1>
        </div>

        <button className='btn btn-primary col-2'>Pay Now</button>
      </div>
  )
}

export default Footer

