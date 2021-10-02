import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';

import Users from './components/users/Users';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <Users />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
