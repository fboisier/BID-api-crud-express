const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(require('./routes/usuarios'));

app.listen( port, () => console.log(`Listening on port: ${port}`) );