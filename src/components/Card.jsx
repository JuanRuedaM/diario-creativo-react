import './Card.css'

const Card = ({ props }) => {
  const { title, date, content, url } = props

  return <div className='card'>
    <img src={url} alt="" />
    <div className='card-body'>
      <h1 className='card-title'>{title}</h1>
      <h6 className='card-title text-muted'>{date}</h6>
      <p className='card-text text-secondary'>{content}</p>
    </div>
  </div>
}

export default Card