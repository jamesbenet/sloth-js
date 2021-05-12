import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <div class="nav-image-holder">
          <img src="https://i.imgur.com/N2pBvHFb.png" alt="sloth" height="100" />
        </div>
        <div className="nav-middle">Hi</div>
        <div className="nav-links">
         <Link to="/">Sloth JS products</Link>
         <Link to="/new">New Product Submission Form</Link>
        </div>
      </nav> 
    </div>  
   //end container class
      
  )
}
      
export default Nav;