import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';
// export create context and cont
// context provider

const GithubContext = React.createClass();

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={'d'}>{children}</GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
