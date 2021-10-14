import React, { useState, useContext } from 'react';

import GitHubContext from '../../context/github/GitHubContext';
import AlertContext from '../../context/alert/AlertContext';

function Search() {
  const gitHubContext = useContext(GitHubContext);
  const alertContext = useContext(AlertContext);

  const { users, searchUsers, clearUsers } = gitHubContext
  const { setAlert } = alertContext;
  
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      searchUsers(text);
      setText('');
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
      <div>
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="form-control">
            <div className="relative">
              <input type="text" placeholder="Search" name="text" className="w-full pr-40 bg-gray-200 input input-lg" value={text} onChange={onChange} /> 
              <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button 
            className="btn btn-ghost btn-lg" 
            onClick={clearUsers}
          >Clear</button>
        </div>
      )}
    </div>
  );
}

export default Search;