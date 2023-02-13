const express = require('express');
const routes = require('./routes');
// import sequelize connection
//referenced from mini project server.js
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
//referenced from mini project server.js
sequelize.sync({force: false}).then( () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})

