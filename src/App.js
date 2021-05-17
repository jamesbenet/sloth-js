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
      <Nav classname="nav" />
        <div className="app-container">  
          
          <main className="main-body">
           
            <Route exact path="/">
             {products.map((product) => (<Product product={product} setToggleFetch={setToggleFetch} />
              ))}           
            </Route>
           
            <Route path="/new">
              <Form setToggleFetch={setToggleFetch}/>
          </Route>
            
          </main>
          <div className="footer"><Footer /></div>
        
      </div>
    </div>
 ); 
}


export default App;
