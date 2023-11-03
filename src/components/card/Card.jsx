import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
    <div className="card">
        <div className="image">
            {item?.attributes.isNew && <span>New Arrival</span>}
            <img src={import.meta.env.VITE_API_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt="" className="mainImage" />
            <img src={import.meta.env.VITE_API_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url} alt="" className="secondImage" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
            <h3>${item?.attributes.price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Card