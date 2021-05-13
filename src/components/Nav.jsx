import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav-container">
     
     <div className="nav-left">
       <h1>SlothJS</h1>
       
      </div>

        <div class="nav-middle">
        </div>
        
        <div className="nav-links">
        
         <Link className="links" to="/">Home</Link>
         <img src="https://i.imgur.com/N2pBvHFb.png" alt="sloth" height="50px" />
         <Link className="links" to="/new">New Product Form</Link>
         
        </div>
    </div>  
   //end container class
      
  )
}
      
export default Nav;