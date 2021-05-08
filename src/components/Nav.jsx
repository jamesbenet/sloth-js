import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <img className ="photo" src="https://i.imgur.com/D8Bz3HO.jpg" alt="sloth" />
      <Link to="/">Sloth JS products</Link>
      <Link to="/new">Submit new recipe here</Link>
    </nav>
  )
}
export default Nav;