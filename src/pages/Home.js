import React from 'react';
import { connect } from 'react-redux';
import { addCounter, subCounter } from '../ducks';

const Home = ({ counter, addCounter, subCounter }) => (
  <div>
    <h1>Ducks Middleware Example</h1>
    <div>
      <b>counter:</b> {counter}
      <button onClick={addCounter}>+1</button>
      <button onClick={subCounter}>-1</button>
    </div>
  </div>
);

export default connect(
  ({ counter }) => ({ counter }),
  { addCounter, subCounter }
)(Home);
