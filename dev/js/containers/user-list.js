import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/actionCreators';

class UserList extends Component {

  createUserList () {
    return this.props.users.map((user) => {
      return <li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first} {user.last}</li>
    });
  }

  render () {
    return (
      <ul>
        {this.createUserList()}
      </ul>
    );
  }
}

//bind state to component as props
function mapStateToProps (state) {
  return {
    users: state.users
  }
}

//bind action to component as props
function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
