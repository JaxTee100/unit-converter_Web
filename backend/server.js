const express = require('express');
const cors = require('cors');
const router = require('./routes/conversion-route')

const app = express();


const PORT = 3000;


// Middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/conversion', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})