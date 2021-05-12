import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav-container">
     
      
        <div class="nav-image-holder">
          <img src="https://i.imgur.com/N2pBvHFb.png" alt="sloth" height="100" />
        </div>
        <div className="nav-middle"><em><h1>SlothJS: </h1></em><h2>You'll get hooked...</h2></div>
        <div className="nav-links">
         <Link to="/">Sloth JS products</Link>
         <Link to="/new">New Product Submission Form</Link>
         
        </div>
        
      
    </div>  
   //end container class
      
  )
}
      
export default Nav;