import React from "react";

const FilterSidebar = ({ filters={},  onFilterChange={} }) => {
  return (
    <aside className="w-72 bg-white shadow-md p-4">
      <div className="mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/India_location_map.svg/1024px-India_location_map.svg.png"
          alt="Map"
          className="rounded-lg"
        />
        <p className="text-center mt-2 text-sm font-semibold">Show on Map</p>
      </div>

      <h2 className="text-lg font-semibold mb-2">Filters</h2>
      <input
        type="text"
        placeholder="Find a Filter"
        className="w-full p-2 border rounded mb-4"
      />

      {Object.entries(filters).map(([key, values]) => (
        <div key={key} className="mb-4">
          <h3 className="font-medium capitalize mb-2">{key}</h3>
          {values.map((v, i) => (
            <label key={i} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                className="form-checkbox"
                // checked={selectedFilters[key]?.includes(v)}
                onChange={(e) => onFilterChange(key, v, e.target.checked)}
              />
              <span>{v}</span>
            </label>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
