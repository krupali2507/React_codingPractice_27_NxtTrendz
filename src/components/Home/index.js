// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="bg-container">
      <div className="home-content-container">
        <div className="inner-content-container">
          <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
          <p className="home-page-content">
            Fashion is part of the daily air Random Data allows creating random
            data sets, where variables correspond to the selected distributions.
            The user can specify the number of rows (samples) and the number of
            variables for each distribution. Distributions from the Scipy’s
            stats module are used. Normal: A normal continuous random variable.
          </p>
          <button type="button" className="shopNow-btn">
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-image"
        />
      </div>
    </div>
  </>
)

export default Home
