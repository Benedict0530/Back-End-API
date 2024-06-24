const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Port to run the server (default: 3000)

// Middleware to allow CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    // Allow access from any origin
    res.header('Access-Control-Allow-Origin', '*');
    // Allow headers and methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});

// Define a route that returns the JSON response
app.get('/', (req, res) => {
    const responseData = {
        "record": {
            "dbindex": 1,
            "country": "BR",
            "gamelink": "https://7xx93.com/#/main/inicio?ch=9938&sd=6",
            "status": 1,
            "policylink": "https://privacy-4e80f.web.app/",
            "dbversion": 3
        }
    };
    res.json(responseData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
