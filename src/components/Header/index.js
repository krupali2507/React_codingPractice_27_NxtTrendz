// Write your JS code here
import './index.css'

const Header = () => (
  <div className="navbar-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="header-logo"
    />
    <div className="nav-link-container">
      <li className="link">Home</li>
      <li className="link">Products</li>
      <li className="link">Cart</li>
      <button type="button" className="logout-btn">
        Logout
      </button>
    </div>
  </div>
)

export default Header
