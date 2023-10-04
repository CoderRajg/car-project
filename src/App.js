import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HotelCard from "./components/HotelCard";
import PropertyPage from "./components/PropertyPage";
import hotelsData from "./data/hotelsData.json";

const App = () => {
  const [activeCity, setActiveCity] = useState(hotelsData.cities[0].name);

  const activeCityData = hotelsData.cities.find(
    (city) => city.name === activeCity
  );
  const [visibleProperties, setVisibleProperties] = useState(
    activeCityData.properties.slice(0, 3)
  );

  const loadMoreProperties = () => {
    const currentlyVisibleCount = visibleProperties.length;
    const newVisibleProperties = activeCityData.properties.slice(
      currentlyVisibleCount,
      currentlyVisibleCount + 3
    );
    setVisibleProperties([...visibleProperties, ...newVisibleProperties]);
  };

  return (
    <Router>
      <div className="App">
        <Header
          cities={hotelsData.cities.map((city) => city.name)}
          activeCity={activeCity}
          onCityChange={setActiveCity}
        />
        <div className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="property-list">
                  {visibleProperties.map((property) => (
                    <HotelCard key={property.id} hotel={property} />
                  ))}
                  <button onClick={loadMoreProperties}>Show More</button>
                </div>
              }
            />
            <Route
              path="/property/:id"
              element={<PropertyPage hotels={activeCityData.properties} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
