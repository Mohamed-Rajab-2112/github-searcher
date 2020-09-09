import React, { useState, useEffect, useCallback } from 'react';
import './header.scss';
import { searchUsers, searchRepos } from '../../api/apiCalls';
const logo = require('./../../assets/images/github-logo.png');

interface HeaderProps {}

const search = async (searchText: string, entityType: string) => {
  let result;
  if (searchText.length >= 3) {
    if (entityType === 'users') {
      result = await searchUsers(searchText);
    } else if (entityType === 'repos') {
      result = await searchRepos(searchText);
    }
  }
  console.log(result);
  return result;
};

const Header = (props: HeaderProps) => {
  const [searchText, setSearchText] = useState('');
  const [entityType, setEntityType] = useState('users');

  useEffect(() => {
    search(searchText, entityType);
  }, [entityType, searchText]);

  const handleSearchTextChange = useCallback(
    (event) => {
      setSearchText(event.target.value);
    },
    [setSearchText]
  );

  const handleEntityTypeChange = useCallback(
    (event) => {
      setEntityType(event.target.value);
    },
    [setEntityType]
  );

  return (
    <div className="search-section">
      <div className="header">
        <img className="logo" src={logo} alt="github logo" />
        <div>
          <h1>Github Searcher</h1>
          <p>Search Users or repositories below</p>
        </div>
      </div>
      <div className="search-terms">
        <input
          type="text"
          placeholder="Start typing to search"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <select onChange={handleEntityTypeChange}>
          <option value="users">Users</option>
          <option value="repos">Repositories</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
