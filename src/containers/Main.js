import React, {Component} from 'react';
import {connect} from 'react-redux';

class Main extends Component {
    render() {
        let userName = this.props.user.isLoggedIn ? this.props.user.name : 'guest';

        return (
            <div className="card">
                <div className="card-header">Main page</div>
                <div className="card-body">Hello, {userName}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(Main)