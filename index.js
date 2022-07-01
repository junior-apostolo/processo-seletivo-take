const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require('./api/router');

const app = express();

app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.info(`Aplicação rodanddo em http://localhost:${PORT}`)
});