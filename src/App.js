import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Footer from './components/layout/Footer';

class App extends Component {

  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <div className="flex flex-col h-screen justify-between">
          <Navbar />
          
          <main>
            <div className="container mx-auto px-6 pb-12">
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                <Users 
                  users={this.state.users} 
                  loading={this.state.loading}
                />
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
