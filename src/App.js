import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GitHubState from './context/github/GitHubState';
import AlertState from './context/alert/AlertState';

function App() {  
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div className="App">
            <div className="flex flex-col justify-between h-screen">
              <Navbar />
              
              <main>
                <div className="container px-3 pb-12 mx-auto">
                  <Alert />

                  <Switch>
                    <Route exact path='/' render={props => (
                      <Fragment>
                        <Search />
                        <Users />
                      </Fragment>
                    )} />

                    <Route exact path='/about' component={About} />
                    <Route exact path='/user/:login' component={User} />
                  </Switch>
                </div>
              </main>

              <Footer />
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
}

export default App;
