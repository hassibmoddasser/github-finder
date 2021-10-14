import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GitHubState from './context/github/GitHubState';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  // Get user repositories
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false);
  }

  

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    // Hide the alert
    setTimeout(() => showAlert(null), 3000);
  }
  
  return (
    <GitHubState>
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
                        setAlert={showAlert}
                      />
                      <Users />
                    </Fragment>
                  )} />

                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' render={props => (
                    <User 
                      {...props}
                      getUserRepos={getUserRepos}
                      repos={repos}
                    />
                  )} />
                </Switch>
              </div>
            </main>

            <Footer />
          </div>
        </div>
      </Router>
    </GitHubState>
  );
}

export default App;
