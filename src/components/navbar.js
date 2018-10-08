import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from 'react-router-dom'
import './navbar.css';
import home from './home.js';
import login from './login.js';
import NoMatch from './404.js';

const Home = withRouter(({ history }) => (
    <button
      type='button'
      onClick={() => { history.push('/') }}
    >
      Home
    </button>
))

const Login = withRouter(({ history }) => (
    <button
      type='button'
      onClick={() => { history.push('/login') }}
    >
      Login
    </button>
))

class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
            <div>
                <Home />
                <Login />
                <Switch>
                    <Route exact path="/" component={home}/>
                    <Route path="/login" component={login}></Route>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
