const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Port to run the server (default: 3000)

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
