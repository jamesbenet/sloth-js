//so we can make request to airtable api
import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [item, setItem] = useState("Javawuhhhh?");
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
    <div className="product-suggestion-form">
    <form onSubmit={handleSubmit}>
      <h1> Do you have a suggestion for a new product?</h1>

      <label htmlFor="item">   Product:</label>
      <input type="text" id="item" value={item} onChange={(e) => setItem(e.target.value)} />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label htmlFor="price">Suggested price:</label>
      <input type="number" id ="price" value={price} 
       onChange={(e) => setPrice(parseInt(e.target.value))} />

      <button type="submit" className="submit-button">submit new product</button> 
    </form>
    </div>

  );

}

export default Form;