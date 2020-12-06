const express = require('express');
const { errors } = require('celebrate');

const cors = require('cors');
const routes = require("./routes-backend");
const port = process.env.PORT || 3333; // default name
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(port, () => {
  console.log("Server listening to port " + port);
})
