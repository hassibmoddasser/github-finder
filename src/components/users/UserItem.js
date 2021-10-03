import React from 'react';
import PropTypes from 'prop-types'

function UserItem({ user: { login, avatar_url, html_url } }) {
  return (
    <div className="card shadow-lg compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full w-14 h-14 shadow">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <a className="text-base-content text-opacity-40" href={html_url}>Visit Profile</a>
        </div>
      </div>
    </div>
  );
}

UserItem.prototype = {
  user: PropTypes.object.isRequired
};

export default UserItem;