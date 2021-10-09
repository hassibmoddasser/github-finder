import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Footer from './components/layout/Footer';

class App extends Component {

  state = {
    users: [],
    loading: false
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  }

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  }

  render() {
    const { users, loading } = this.state;
    
    return (
      <div className="App">
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          
          <main>
            <div className="container px-3 pb-12 mx-auto">
              <Search 
                searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers}
                showClearButton={users.length > 0 ? true : false}
              />
              <Users 
                users={users} 
                loading={loading}
              />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
