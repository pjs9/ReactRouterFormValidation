import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import NotFoundPage from './NotFoundPage';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
