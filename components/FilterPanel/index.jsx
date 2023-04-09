import React from "react";

const FilterPanel = ({ onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter-panel">
      <select name="exampleFilter" onChange={handleChange}>
        {/* Render filter options */}
        <option>Childcare</option>
        <option>Eldercare</option>
        <option>Healthcare</option>
      </select>
    </div>
  );
};

export default FilterPanel;
