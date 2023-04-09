import React from "react";

const LocationSearchBar = () => {
  return (
    <div className="location-search-bar">
      <input
        type="text"
        placeholder="Enter your location or use current location"
      />
      <button type="submit">🔍</button>
    </div>
  );
};

export default LocationSearchBar;
