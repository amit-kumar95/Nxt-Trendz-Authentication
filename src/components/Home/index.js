import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="homeContainer">
          <div className="container">
            <h1 className="clothesHead">
              Clothes That Get YOU <br /> Noticed
            </h1>
            <p className="paraCloth">
              Fashion is the part of daily ait and its does not quite that it
              changes all the time. Clothes have always be a marker of the era
              and we are in a revolution. Your fashion makes you been seen and
              heared that way to are. So celebrate the season new and exciting
              fashion in your own way.
            </p>
            <button className="btnShowNow" type="button">
              Show Now
            </button>
          </div>

          <div className="container">
            <img
              className="clotheImg"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt=" clothes that get you noticed"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
