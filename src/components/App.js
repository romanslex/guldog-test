import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Nav from '../containers/Nav';
import Main from '../containers/Main';
import Login from '../containers/Login';
import News from '../containers/News';
import '../App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <main className="py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <Route path='/main' component={Main}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/news' component={News}/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
