import './index.css'

const FeedbackType = props => {
  const {details, updatedStatus} = props
  const {name, imageUrl} = details

  const onClickBtn = () => {
    updatedStatus()
  }

  return (
    <li className="list-card">
      <button onClick={onClickBtn} type="button" className="smile-btn">
        <img src={imageUrl} className="smile-img" alt={name} />
      </button>

      <p>{name}</p>
    </li>
  )
}

export default FeedbackType
