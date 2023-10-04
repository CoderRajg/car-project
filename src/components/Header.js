import React from 'react';

const Header = ({ cities, activeCity, onCityChange }) => {
  return (
    <div className="header">
      {cities.map(city => (
        <div
          key={city.name}
          className={city.name === activeCity ? 'active tab' : 'tab'}
          onClick={() => onCityChange(city.name)}
        >
          {city.name}
        </div>
      ))}
    </div>
  );
};

export default Header;
