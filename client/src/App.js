import { useState, useEffect } from 'react';
import Axios from 'axios';
import classes from './App.module.css';

const App = props => {
  const [coffeeName, setCoffeeName] = useState('');
  const [coffeeReview, setCoffeeReview] = useState('');

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      coffeeName: coffeeName,
      coffeeReview: coffeeReview,
    }).then(() => {
      alert('successful insert!');
    });
  };

  return (
    <main className={classes.main}>
      <h1>CRUD Application</h1>

      <div className={classes.form}>
        <label>Coffee Bean Name:</label>
        <input
          type="text"
          name="coffeeBean"
          onChange={e => {
            setCoffeeName(e.target.value);
          }}
        />
        <label>Coffee Review</label>
        <input
          type="text"
          name="coffeeReview"
          onChange={e => {
            setCoffeeReview(e.target.value);
          }}
        />

        <button onClick={submitReview}>Submit</button>
      </div>
    </main>
  );
};

export default App;
