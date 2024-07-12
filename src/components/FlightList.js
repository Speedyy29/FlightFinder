// src/components/FlightList.js
import React from 'react';

const FlightList = ({ flights }) => {
  return (
    <div>
      {flights.length === 0 ? (
        <p>No flights found.</p>
      ) : (
        <ul>
          {flights.map((flight, index) => (
            <li key={index}>
              {flight.from} to {flight.to}: ${flight.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlightList;
