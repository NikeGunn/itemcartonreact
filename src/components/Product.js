import React from "react"


const Product = (props) => {
  return (
<>    
<div className="row mt-2">
        <div className="col-5">
          <div className="list-group" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"><h1>
          {props.allproducts.name}<span className="badge bg-secondary m-3 p-2"> Rs. {props.allproducts.price}</span><span className="badge bg-secondary">{props.allproducts.Quantity}</span>
        </h1></a>
            
          </div>
        </div>
      
{/* Another similear way to show data */}

      {/* <div className="row mt-3">
      <div className="col-5 ">
        <h1>
          {props.allproducts.name}<span className="badge bg-secondary"> Rs. {props.allproducts.price}</span><span className="badge bg-secondary">{props.allproducts.Quantity}</span>
        </h1>
      </div> */}

      <div className="col-2">
        <div className="btn-group m-4 p-1" role="group" aria-label="Basic mixed styles example">
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
      <span className="badge bg-secondary m-3 p-2"><h2>Rs.{props.allproducts.Quantity * props.allproducts.price}</h2></span> 
      </div>
      <button onClick={()=> {props.removeItem(props.index)}}className="col-2 btn btn-danger m-2 p-2">
          Remove
      </button>
    </div>

    </>

  );
};

export default Product
