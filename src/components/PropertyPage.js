import React from 'react';
import { useParams } from 'react-router-dom';



const PropertyPage = ({ hotels }) => {
  const { id } = useParams();
  const hotel = hotels.find(hotel => hotel.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found.</div>;
  }

  return (
    <div className="container property-page">
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
    </div>
  );
};

export default PropertyPage;
