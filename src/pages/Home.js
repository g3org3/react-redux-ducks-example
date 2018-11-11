import React from 'react';
import { connect } from 'react-redux';

import { addCounter, subCounter, resetProfiles } from '../ducks';
import GithubProfiles from '../components/GithubProfiles';

const Home = ({ counter, addCounter, subCounter, resetProfiles }) => (
  <div>
    <h1>Ducks Example</h1>
    <div>
      <b>counter:</b> {counter}
      <button onClick={addCounter}>+1</button>
      <button onClick={subCounter}>-1</button>
    </div>
    <hr />
    <GithubProfiles resetProfiles={resetProfiles} />
  </div>
);

export default connect(
  ({ counter }) => ({ counter }),
  { addCounter, subCounter, resetProfiles }
)(Home);
