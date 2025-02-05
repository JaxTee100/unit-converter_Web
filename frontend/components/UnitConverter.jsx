import React from 'react';

const UnitSelector = ({ category, units, selectedUnit, onChange }) => {
  return (
    <select value={selectedUnit} onChange={onChange}>
      {Object.keys(units[category]).map((unit) => (
        <option key={unit} value={unit}>
          {unit}
        </option>
      ))}
    </select>
  );
};

export default UnitSelector;