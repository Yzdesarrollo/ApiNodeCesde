const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

dotenv.config();

console.log('MONGO_DB:',process.env.MONGO_DB);

const routesV1 = require('./routes/v1/index');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// parse application/json
app.use(bodyParser.json());

routesV1(app);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});