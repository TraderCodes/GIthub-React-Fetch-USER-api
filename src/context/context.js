import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';
// export create context and cont
// context provider

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  // Get item from mock and set as default
  const [githubUser, setGithubUser] = useState(mockUser); //#2
  const [repos, setRepos] = useState(mockRepos); //#3
  const [followers, setFollowers] = useState(mockFollowers); //#4

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
