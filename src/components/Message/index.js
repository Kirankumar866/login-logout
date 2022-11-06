// Write your code here
import './index.css'

const Message = props => {
  const {IsLoggedIn} = props
  const message = IsLoggedIn ? 'Please Login' : 'Welcome User'
  return <h1 className="message-css">{message}</h1>
}
export default Message
