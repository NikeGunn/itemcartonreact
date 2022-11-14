import React from "react"


const Product = (props) => {
  return (
    <div className="row mt-3">
      <div className="col-5 ">
        <h1>
          {props.allproducts.name}<span className="badge bg-secondary"> Rs. {props.allproducts.price}</span><span className="badge bg-secondary">{props.allproducts.Quantity}</span>
        </h1>
      </div>

      <div className="col-3">
        <div className="btn-group"role="group"aria-label="Basic mixed styles example">
          <button onClick={()=> {props.decrementHandler(props.index)}}type="button" className="btn btn-danger">
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.allproducts.Quantity}
          </button>
          <button onClick={()=> {props.incrementHandler(props.index)}} type="button" className="btn btn-success">
            +
          </button>
        </div>
      </div>
      <div className="col-2">
      <span className="badge bg-secondary"><h2>Rs.{props.allproducts.Quantity * props.allproducts.price}</h2></span> 
      </div>
      <button onClick={()=> {props.removeItem(props.index)}}className="col-2 btn btn-danger ">
          Remove
      </button>
    </div>
  );
};

export default Product
