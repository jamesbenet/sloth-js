import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <div class="box">
         <div class="image-wrapper">
            {/* <img src="https://i.imgur.com/N2pBvHFb.png" alt="sloth" /> */}
         </div>
        <div className="nav">
          <Link to="/">Sloth JS products</Link>
          <Link to="/new">New Product Submission Form</Link>
        </div>
      </div>  
     </nav> 
  )
}
      
export default Nav;