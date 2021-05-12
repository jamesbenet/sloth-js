//so we can make request to airtable api
import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      item,
      description,
      price,
    };
  

  //request to baseURL passing object of data, object has key 'fields' 
  //value of all data we are adding, config adds authorization header
  
    await axios.post(baseURL, { fields: newProduct }, config);
  
  //changing the value of toggleFetch to trigger useEffect
  props.setToggleFetch((curr) => !curr);
}; 

  return (
    
    <form className="product-suggestion-form" onSubmit={handleSubmit}>
      <label htmlFor="item">Product:</label>
      <input type="text" id="item" value={item} onChange={(e) => setItem(e.target.value)} />
      <label htmlFor="description">Description:</label>
      <input type="text"
       id="description" 
       value={description} 
       onChange={(e) => setDescription(e.target.value)} />
      <label htmlFor="price">Suggested price:</label>
      <input type="number"
       id ="price"
       value={price} 
       onChange={(e) => setPrice(parseInt(e.target.value))} />
      <button type="submit">submit new product</button> 
    </form>

  );

}

export default Form;