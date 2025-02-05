import React, { useState } from 'react';
import axios from 'axios';
import UnitSelector from './UnitConverter';

const units = {
  length: {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    inches: 39.3701,
    feet: 3.28084,
    yards: 1.09361,
    miles: 0.000621371,
  },
  weight: {
    kilograms: 1,
    grams: 1000,
    milligrams: 1000000,
    pounds: 2.20462,
    ounces: 35.274,
  },
  temperature: {
    celsius: 1,
    fahrenheit: 33.8,
    kelvin: 274.15,
  },
};

const Converter = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('kilometers');
  const [value, setValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);

  const handleConvert = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/conversion', {
        category,
        fromUnit,
        toUnit,
        value,
      });
      console.log(response.data.value);
      setConvertedValue(response.data.value);
    } catch (error) {
      console.error('Error converting units:', error);
    }
  };

  return (
    <div>
      <h1>Unit Converter</h1>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {Object.keys(units).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>From:</label>
        <UnitSelector category={category} units={units} selectedUnit={fromUnit} onChange={(e) => setFromUnit(e.target.value)} />
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div>
        <label>To:</label>
        <UnitSelector category={category} units={units} selectedUnit={toUnit} onChange={(e) => setToUnit(e.target.value)} />
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div>
        <h2>Result: {convertedValue}</h2>
      </div>
    </div>
  );
};

export default Converter;