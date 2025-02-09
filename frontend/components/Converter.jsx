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
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);

  const handleConvert = async () => {
    try {
      const payload = {
        category,
        fromUnit,
        toUnit,
        value: Number(value),
      };
      console.log('Sending payload:', payload);
      const response = await axios.post('http://localhost:5000/api/conversion/convert', payload);
      console.log("response:", response.data.value);
      setConvertedValue(response.data.value);
      setFromUnit('');
      setToUnit('')
    } catch (error) {
      console.error('Error converting units:', error);
    }
  };

  return (
    <div className='border-2 border-red-500 p-4 space-y-16'>
      <h1>Unit Converter</h1>
      <div>
      <select
        id="categorySelect"
        value={category}
        onChange={(e) =>{setCategory(e.target.value)}}
      >
        <option value="">Select a category</option>
        {Object.keys(units).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <p>{category}</p>
      </div>

      <div className='flex justify-between'>
      <select
        id="fromUnit"
        value={fromUnit}
        onChange={(e) =>{setFromUnit(e.target.value)}}
      >
        <option value="">Select a category</option>
        {Object.entries(units[category]).map(([unit, value]) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{fromUnit}</p>
      </div>

      <div className='flex space-between'>
      <select
        id="toUnit"
        value={toUnit}
        onChange={(e) =>{setToUnit(e.target.value)}}
      >
        <option value="">Select unit to change to</option>
        {Object.entries(units[category]).map(([unit, value]) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      
      <p>{toUnit}</p>
      </div>
      
      <button onClick={handleConvert}>Convert</button>
      <div>
        <h2>Result: {convertedValue}</h2>
      </div>
      {/* <div className='border border-blue-500 flex p-4 space-x-6 mb-4'>
        <label className='border border-green-700 '>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className='border-none outline-none bg-slate-200'>
          <option value={'meters'}>
            meters
          </option>
          <option value={'kilometers'}>
            kilometers
          </option>
          <option value={'centimeters'}>
            centimeters
          </option>
          <option value={'millimeters'}>
            millimeters
          </option>
          <option value={'inches'}>
            inches
          </option>
          <option value={'feet'}>
            feet
          </option>
          <option value={'yards'}>
            yards
          </option>
          <option value={'miles'}>
            miles
          </option>
          
        </select>
        <div className='border p-4 rounded-md shadow-lg'>{}</div>
      </div> */}
      {/* <div>
        <label>From:</label>
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
        <option value={'meters'}>
            meters
          </option>
          <option value={'kilometers'}>
            kilometers
          </option>
          <option value={'centimeters'}>
            centimeters
          </option>
          <option value={'millimeters'}>
            millimeters
          </option>
          <option value={'inches'}>
            inches
          </option>
          <option value={'feet'}>
            feet
          </option>
          <option value={'yards'}>
            yards
          </option>
          <option value={'miles'}>
            miles
          </option>
        </select>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      </div> */}
      {/* <div>
        <label>To:</label>
        <UnitSelector category={category} units={units} selectedUnit={toUnit} onChange={(e) => setToUnit(e.target.value)} />
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div>
        <h2>Result: {convertedValue}</h2>
      </div> */}
    </div>
  );
};

export default Converter;