import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Product from "./components/Product"
import Form from "./components/Form";
import Nav from "./components/Nav";
import { baseURL, config } from "./services";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      
      const resp = await axios.get(baseURL, config);
      setProducts(resp.data.records);
    };
    fetchProducts();
    console.log(products[0]);
  }, [toggleFetch]);

  return (
    <div className="App">
     
     <Nav classname="nav" />
      <Route exact path="/">
        <main>
          {products.map((product) => (
          <Product product={product} setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      {/* <div> */}
        <Route path="/new">
          <Form />
        </Route>
      {/* </div> */}
    </div>
  );
}

export default App;
