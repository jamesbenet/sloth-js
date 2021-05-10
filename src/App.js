import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Product from "./components/Product.jsx"
import Form from "./components/Form";
import Nav from "./components/Nav";
import { baseURL, config } from "./services";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      // const url = "https://api.airtable.com/v0/appzGBcPBzpuGidxc/slothJS?maxRecords=3&view=Grid%20view";
      const resp = await axios.get(baseURL, config);
      // console.log(resp.data);
      console.log(resp.data.records);
      setProducts(resp.data.records);
    };
    fetchProducts();
    console.log(products);
    // console.log({products.fields});
  }, [toggleFetch]);
  console.log(products);
  return (
    <div className="App">
     <header>
     <Nav></Nav></header>
      <Route exact path="/">
       {/* {product.fields.name} */}
        <main>{products.map((product) => (
          <Product product={product} setToggleFetch={setToggleFetch} />
        ))}
        </main>
      </Route>
      <div>
      <Route path="/new">
        <Form />
      </Route>
      </div>
    </div>
  );
}

export default App;
