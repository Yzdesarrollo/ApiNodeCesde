const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routesV1 = require('./routes/v1/index');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// parse application/json
app.use(bodyParser.json())

routesV1(app);

app.listen(3000, () => {
    console.log('running on port 3000');
});