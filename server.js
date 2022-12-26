const sequelize = require('./src/models')
const config = require('./src/config/config');
const express = require('express');
const app = express();
const router = require('./src/routes');
const cors = require('cors');
const { response } = require('./src/helper/utilityHelper');
const Redis = require('./src/config/redis');

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.send(`User Microservice v.1.0 ${new Date()}`);
});

app.use('/user-service/api/v1', router);

app.use("/*", (req, res) => {
    return response(res, false, 404, "There was no resource for this request");
});

const PORT = process.env.APP_PORT || 5010;

Redis.connect();

app.listen(PORT, () => {
    console.log(`Listening on port: ${process.env.APP_PORT}`);
});

module.exports = app;