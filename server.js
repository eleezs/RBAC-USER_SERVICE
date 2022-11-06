const sequelize = require('./src/config/database')
const config = require('./src/config/config').production;
const express = require('express');
const app = express();
const router = require('./routers/routes');
const cors = require('cors');

app.disable('etag');


app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req,res) => {
    res.send(`User Microservice v.1.0 ${new Date()}`);
});

app.use('/user-service/v1', router);

app.listen(config.appPort, () => {
    console.log(`Listening on port: ${process.env.APP_PORT}`);
});

module.exports = app;