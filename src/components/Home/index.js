// Write your code here
import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state: {IsLoggedIn: false}

  onClickButton = () => {
    this.setState(prevstate => ({
      IsLoggedIn: !prevstate.IsLoggedIn,
    }))
  }

  render() {
    const {IsLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <Message IsLoggedIn={IsLoggedIn} />
          {IsLoggedIn ? (
            <Login login={this.onClickButton} />
          ) : (
            <Logout logout={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
