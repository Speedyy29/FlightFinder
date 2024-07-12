// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import FlightList from './components/FlightList';
import FlightChart from './components/FlightChart';

const App = () => {
  const [flights, setFlights] = useState([]);

  const handleSearch = (from, to) => {
    const sampleFlights = [
      { from: 'Bangalore', to: 'Goa', price: 100 },
      { from: 'Bangalore', to: 'Delhi', price: 150 },
      { from: 'Mumbai', to: 'Goa', price: 90 },
    ];

    const filteredFlights = sampleFlights.filter(flight => 
      flight.from.toLowerCase() === from.toLowerCase() && flight.to.toLowerCase() === to.toLowerCase()
    );

    setFlights(filteredFlights);
  };

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={handleSearch} />
      <FlightList flights={flights} />
      {flights.length > 0 && <FlightChart flights={flights} />}
    </div>
  );
};

export default App;
