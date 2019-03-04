import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Nav from '../containers/Nav';
import Main from '../containers/Main';

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
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
