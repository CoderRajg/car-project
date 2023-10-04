import React from 'react';
import { Link } from 'react-router-dom';
import './HotelCard.css'

const HotelCard = ({ hotel }) => {
  return (
    <div className='hotel-card-whole'>
    <div className="hotel-card">
      <h3>{hotel.name}</h3>
      <p>{hotel.description}</p>
    </div>
      <Link to={`/property/${hotel.id}`}>View Details</Link>
    </div>
  );
};

export default HotelCard;
