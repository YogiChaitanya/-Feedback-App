// Write your React code here.

import {Component} from 'react'
import './index.css'
import FeedbackType from '../FeedbackType'

class Feedback extends Component {
  state = {
    isClicked: false,
  }

  updatedStatus = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const listOfTypes = resources.emojis
    const loveImg = resources.loveEmojiUrl

    return (
      <div className="bg-container">
        {isClicked ? (
          <div className="card2">
            <img src={loveImg} className="love-img" alt="love emoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback improve our customer support performace.
            </p>
          </div>
        ) : (
          <div className="card1">
            <h1 className="heading1">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {listOfTypes.map(eachFeed => (
                <FeedbackType
                  key={eachFeed.id}
                  details={eachFeed}
                  updatedStatus={this.updatedStatus}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
