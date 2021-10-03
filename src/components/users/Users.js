import React, { Component, Fragment } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  render() {
    const { users } = this.props;
    
    return (
      <Fragment>
        {users.map(user => {
          return <UserItem key={user.id} user={user} />
        })}
      </Fragment>
    )
  }
}

export default Users;