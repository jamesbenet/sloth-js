import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav-container">
     
     <div className="nav-left">
       <h1>Sloth JS</h1>
       
      </div>

        <div class="nav-middle">
        </div>
        
        <div className="nav-links">
        
         <Link className="links" to="/">Home</Link>
         
        <Link className="links" to="/new">New Product Form</Link>
        
        
         
        </div>
    </div>  
  
      
  )
}
      
export default Nav;