const express = require('express')
const app = express();
const port = 5000;



app.listen(port, () => {
    console.log(`Application is running on port ${port}.`);
});