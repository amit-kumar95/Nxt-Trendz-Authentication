import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="mainHeader">
    <img
      className="logoImg"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <div className="mainHeaders">
      <Link className="linkStl" to="/">
        <p>Home</p>
      </Link>
      <p>Products</p>
      <p>Cards</p>
      <button className="btnLogout" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
