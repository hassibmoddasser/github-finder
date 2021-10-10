import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  }

  // Get single GitHub user
  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ user: res.data, loading: false });
  }

  // Reset User State
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  }

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });

    // Hide the alert
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  }

  render() {
    const { user, users, loading, alert } = this.state;
    
    return (
      <Router>
        <div className="App">
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            
            <main>
              <div className="container px-3 pb-12 mx-auto">
                {alert && <Alert alert={alert} />}

                <Switch>
                  <Route exact path='/' render={props => (
                    <Fragment>
                      <Search 
                        searchUsers={this.searchUsers} 
                        clearUsers={this.clearUsers}
                        showClearButton={users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                      />
                      <Users 
                        users={users} 
                        loading={loading}
                      />
                    </Fragment>
                  )} />

                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' render={props => (
                    <User 
                      {...props}
                      getUser={this.getUser}
                      user={user}
                      loading={loading}
                    />
                  )} />
                </Switch>
              </div>
            </main>

            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
