import { useEffect, useState } from "react";
import "./App.css";
import { ProductCard } from "./Product.js";
import Header from "./header.js";
import Fotter from "./fotter.js";

function App() {
  let [Product, Updateproducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    console.log(res);
    let productlist = await res.json();
    Updateproducts(productlist);
  }
  if (Product.length === 0) {
    return <h1>feacting</h1>;
  }
  return (
    <>
      <Header></Header>
      <div className="product-list">
        {Product.map((p) => (
          <ProductCard {...p} key={p.id}></ProductCard>
        ))}
      </div>
      <Fotter></Fotter>
    </>
  );
}
export default App;
