import React, { Component, Fragment } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'hassibmoddasser',
        avatar_url: 'https://avatars.githubusercontent.com/u/29257731?v=4',
        html_url: 'https://github.com/hassibmoddasser'
      },
      {
        id: '2',
        login: 'monirakarimi',
        avatar_url: 'https://avatars.githubusercontent.com/u/42800208?v=4',
        html_url: 'https://github.com/monirakarimi'
      }
    ]
  };

  render() {
    const { users } = this.state;
    
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