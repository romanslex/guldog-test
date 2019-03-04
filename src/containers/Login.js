import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {login} from "../actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'user',
            pass: 'password',
            showErrors: false
        };
        this.loginChange = this.loginChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.login = this.login.bind(this);
    }

    loginChange(e) {
        this.setState({login: e.target.value})
    }

    passChange(e) {
        this.setState({pass: e.target.value})
    }

    login(e) {
        e.preventDefault();
        if (this.state.login === 'user' && this.state.pass === 'password')
            this.props.dispatchLogin(this.state.login);
    }

    render() {
        if (this.props.user.isLoggedIn)
            return <Redirect to='/main'/>;

        return (
            <form>
                <div className="form-group">
                    <label htmlFor="login">Login</label>
                    <input value={this.state.login} onChange={this.loginChange} type="text" className="form-control"
                           id="login" placeholder="Enter login"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input value={this.state.pass} onChange={this.passChange} type="password" className="form-control"
                           id="pass"
                           placeholder="Password"/>
                </div>
                <button onClick={this.login} className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => ({
    dispatchLogin: name => dispatch(login(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)