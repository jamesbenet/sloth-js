import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <img className="photo" src="https://i.imgur.com/D8Bz3HO.jpg" alt="sloth" />
      <div className="nav">
      <Link to="/">Sloth JS products</Link>
        <Link to="/new">New Product Submission Form</Link>
        </div>
    </nav>
  )
}
export default Nav;