import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "../actions";

class Nav extends Component {
    loginBtn() {
        if (this.props.user.isLoggedIn)
            return (
                <li className="nav-item"><span style={{cursor: 'pointer'}} onClick={() => this.props.dispatchLogout()} className='nav-link'>Выйти</span></li>
            );
        return <li className="nav-item"><Link className='nav-link' to='/login'>Войти</Link></li>;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link className='nav-link' to='/main'>Главная</Link></li>
                            <li className="nav-item"><Link className='nav-link' to='/news'>Новости</Link></li>
                            {this.loginBtn()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => ({
    dispatchLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)