import React from 'react';

import UserRepositoriesWidget from './widgets/UserRepositories/UserRepositories.widget';
import UserProfileWidget from './widgets/UserProfile/UserProfile.widget';

import './App.scss';

function App() {
  return (
    <main className="app container">
      <UserProfileWidget />
      <UserRepositoriesWidget />
    </main>
  );
}

export default App;
