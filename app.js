require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const router = require ('./router');

const fs = require('fs');
const config = {
  development: {
    username: "postgres",
    password: process.env.PASSWORD_DEV,
    database: "rest_api",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: process.env.PASSWORD_PRODUCTION,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}

fs.writeFileSync('./config/config.json', JSON.stringify(config, null, 2), 'utf8');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);


app.listen(PORT, () => {
  console.log(`App is running on port:${PORT}`);
})
