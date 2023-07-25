import {Component} from 'react'

import './index.css'
import math 

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }
  changeRandomNumber = () => {
    this.setState((prevState=>
        count: prevState.Math.random(1, 100))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">Random Number</h1>
        <p className="description">
          Generate a random number in the range of 0 to 100
        </p>
        <button className="button" onClick={this.changeRandomNumber}>
          Generate
        </button>
        <p className="number">{count}</p>
      </div>
    )
  }
}
export default RandomNumberGenerator
