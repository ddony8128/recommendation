import React, { Component } from 'react';
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Home from './Home'
import Ask from './Ask'
import Result from './Result'

const history = createBrowserHistory();

class App extends Component {

    render() {

        return (
            <Router history = {history} >
                <Route exact path="/" component={Home} />
                <Route path="/ask" component={Ask} />
                <Route path="/result/:resultKey" component={Result} />
            </Router>
        );
    }
}

export default App;
