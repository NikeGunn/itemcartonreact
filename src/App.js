import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import { useState } from "react";
import Additem from "./components/Additem";

function App() {

  let [productList, setProductList] = useState([
    {
      name: "Iphone X",
      price: 100000,
      Quantity: 0,
    },
    {
      name: "Poco f1",
      price: 40000,
      Quantity: 0,
    },
    {
      name: "Iphone XR",
      price: 80000,
      Quantity: 0,
    },
  ])

  let [totalAmount, setTotalAmount] = useState(0)


  const incrementHandler = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newProductList[index].Quantity++
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount)
    setProductList(newProductList)
  }

  const decrementHandler = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    if (newProductList[index].Quantity > 0) {
      newProductList[index].Quantity--
      newTotalAmount -= newProductList[index].price
    }
    setTotalAmount(newTotalAmount)
    setProductList(newProductList)
  }

  const resetQuantity = () => {
    let newProductList = [...productList]
    newProductList.map((product) => {
      product.Quantity = 0
    })
    setProductList(newProductList)
    setTotalAmount(0)
  }
  const removeItem = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newTotalAmount -= newProductList[index].price * newProductList[index].Quantity
    newProductList.splice(index, 1)
    setTotalAmount(newTotalAmount)
    setProductList(newProductList)

  }

  const addItem = (name, price) => {
    let newProductList = [...productList]
    newProductList.push({
      name: name,
      price: price,
      Quantity: 0,
    })
    setProductList(newProductList)
  }


  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Additem addItem={addItem}/>
        <ProductList productList={productList} incrementHandler={incrementHandler} decrementHandler={decrementHandler} removeItem={removeItem} />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />

    </>
  );
}

export default App;
