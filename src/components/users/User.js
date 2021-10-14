import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';

import GitHubContext from '../../context/github/GitHubContext';

import Repos from '../repos/Repos';

function User({ match }) {
  const gitHubContext = useContext(GitHubContext);
  
  const { getUser, user, loading, repos, getUserRepos } = gitHubContext;
  
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return <Spinner />
  }

  return (
    <Fragment>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link className="btn btn-ghost" to="/">Back To Search</Link>
        </div>
        
        <div className="grid grid-cols-1 mb-8 md:gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3">
          <div className="mb-6 custom-card-image md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure> 
              <div className="justify-end card-body">
                <h2 className="mb-0 card-title">{name}</h2>
                <p>{login}</p>
              </div>
            </div> 
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">{name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a className="btn btn-outline" href={html_url}>Visit GitHub Profile</a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div> 
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}

              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div> 
                  <div className="text-lg stat-value">
                    <a href={'https://' + blog} target="_blank">{blog}</a>
                  </div>
                </div>
              )}

              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div> 
                  <div className="text-lg stat-value">
                    <a href={'https://twitter.com/' + twitter_username} target="_blank">{twitter_username}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div> 
            <div className="pr-5 stat-title">Followers</div> 
            <div className="pr-5 text-3xl stat-value md:text-4xl">{followers}</div>
          </div> 
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div> 
            <div className="pr-5 stat-title">Followings</div> 
            <div className="pr-5 text-3xl stat-value md:text-4xl">{following}</div>
          </div> 
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div> 
            <div className="pr-5 stat-title">Public Repos</div> 
            <div className="pr-5 text-3xl stat-value md:text-4xl">{public_repos}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div> 
            <div className="pr-5 stat-title">Public Gists</div> 
            <div className="pr-5 text-3xl stat-value md:text-4xl">{public_gists}</div>
          </div>
        </div>

        <Repos repos={repos} />
      </div>
    </Fragment>
  );
}

export default User;