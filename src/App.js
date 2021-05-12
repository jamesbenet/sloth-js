import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Product from "./components/Product"
import Form from "./components/Form";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
    <div className="App" className="container">
      <header className="header"> 
        <Nav classname="nav" />
      </header> 
      {/* <div className="left-side">left</div> */}
      <main className="main-body">

      <div style={{ backgroundImage: `url("https://i.imgur.com/N2pBvHF.png")` }}>
        
        <Route exact path="/">
          {products.map((product) => (
            <Product product={product} setToggleFetch={setToggleFetch} />
            ))}
        </Route>

        <Route path="/new">
           <Form setToggleFetch={setToggleFetch}/>
        </Route>
      </div> 
      </main>
      
      {/* <div className="right-side">right</div> */}
    <div className="footer"><Footer /></div>
  {/* end container */}
  </div>
 ); 
}


export default App;
