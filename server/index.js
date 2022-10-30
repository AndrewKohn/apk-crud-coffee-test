const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'CRUDCoffeeDatabase',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/insert', (req, res) => {
  const coffeeName = req.body.coffeeName;
  const coffeeReview = req.body.coffeeReview;

  const sqlInsert =
    'INSERT INTO coffee_reviews (coffeeName, coffeeReview) VALUES (?,?);';

  db.query(sqlInsert, [coffeeName, coffeeReview], (err, result) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log('running on port 3001');
});
