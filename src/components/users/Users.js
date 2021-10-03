import React from 'react';
import PropTypes from 'prop-types'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

function Users({ users, loading }) {
  if (!loading) {
    return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {users.map(user => {
          return <UserItem key={user.id} user={user} />
        })}
      </div>
    );
  } else {
    return <Spinner />
  }
}

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;