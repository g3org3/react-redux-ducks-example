import React from 'react';
import { connect } from 'react-redux';

import { getProfiles } from '../ducks';

const GithubProfiles = ({ getProfiles, users, loaded, loading, resetProfiles }) => (
  <div>
    <h2>Github Profiles</h2>
    <button onClick={getProfiles}>load all</button>
    <button onClick={resetProfiles}>reset</button>
    <ul>
      <li>loaded: {`${loaded}`}</li>
      <li>loading: {`${loading}`}</li>
      <li>users: {users.length}</li>
      {users.map(({ login }) => (
        <li key={login}>{login}</li>
      ))}
    </ul>
  </div>
);

export default connect(
  ({ user: { loaded, loading, users } }) => ({ loaded, loading, users }),
  dispatch => ({ getProfiles: () => getProfiles(dispatch)() })
)(GithubProfiles);
