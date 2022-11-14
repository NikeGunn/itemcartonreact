import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            productPrice: 0,
        }

        }
    render() {
        return (

            <form className='row p-2' onSubmit={(e)=> {e.preventDefault()
            this.props.addItem(String(this.state.productName),Number(this.state.productPrice))}}>
                <div className="mb-3 col-4">
                    <label htmlFor="exampleInputEmail1" className="form-label fs-4 fw-bold color-blue">Item Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required = {true} name= "productName" placeholder='Enter Your Item Here' aria-describedby="emailHelp" onChange={(e)=> {this.setState({productName: e.currentTarget.value})}} 
                    value= {this.state.productName}/>
                </div>

                <div className="mb-3 col-4">
                    <label htmlFor="examplename" className="form-label fs-4 fw-bold">Item Price</label>
                    <input type="number" className="form-control" id="inputname" required = {true} placeholder='Enter Your Price Here'  name= "productPrice" onChange={(e)=> {this.setState({productPrice: e.currentTarget.value})}}
                    value= {this.state.productPrice} />
                </div>
    
                <button type="submit" className="btn btn-primary  col-4 fs-3" >Add Item</button>
            </form>
        );
    }
}

export default AddItem;