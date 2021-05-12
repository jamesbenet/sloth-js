import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Product from "./components/Product"
import Form from "./components/Form";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { baseURL, config } from "./services";
import "./App.css";
import "./Nav.css";
import "./Product.css";

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
    <div className="app-container">  
      {/* <div className="header-container">  */}
        <Nav classname="nav" />
      {/* </div>  */}
      
      <main className="main-body">
      {/* <div style={{ backgroundImage: `url("https://i.imgur.com/N2pBvHF.png")` }}> */}
          {/* HOMEPAGE */}
        <Route exact path="/">
          {products.map((product) => (
            <Product product={product} setToggleFetch={setToggleFetch} />
            ))}
        </Route>
            {/* FORM PAGE */}
        <Route path="/new">
           <Form setToggleFetch={setToggleFetch}/>
        </Route>
      </main>

      <div className="footer"><Footer /></div>
      {/* end container */}
      </div>
    </div>
 ); 
}


export default App;
