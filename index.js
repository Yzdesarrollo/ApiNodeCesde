const express = require('express');
const app = express();
const routes = require('./routes/v1/index')

const routesV1 = require('./routes/v1/index');

routesV1(app);

app.listen(3000, () => {
    console.log('running on port 3000');
});