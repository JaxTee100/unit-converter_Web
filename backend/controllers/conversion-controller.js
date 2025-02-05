

// Conversion logic
const conversions = {
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

// Conversion endpoint
const unitConverter = (req, res) => {
    try {
        const { category, fromUnit, toUnit, value } = req.body;

        if (!conversions[category] || !conversions[category][fromUnit] || !conversions[category][toUnit]) {
            return res.status(400).json({ error: 'Invalid conversion units' });
        }

        const convertedValue = value * (conversions[category][toUnit] / conversions[category][fromUnit]);
        res.status(200).json({
            success: true,
            value: convertedValue
        });
    } catch (error) {
        
    }
  
};

module.exports = {unitConverter};