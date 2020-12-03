const express = require('express');
const cors = require('cors');
const routes = require("./routes-backend");
const port = process.env.PORT || 3333; // default name
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("Server listening to port " + port);
})
